import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { getPublicConfig, getTokenInfo, getTokenById, getRankings } from "./api.js";
import { getHelperContract, getAgentIdentifier, getTaxTokenContract } from "./contracts.js";
import { ethers } from "ethers";
import { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "4meme-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_public_config",
        description: "Get four.meme public configuration including raisedToken details",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "get_token_info",
        description: "Get detailed information for a specific token by address",
        inputSchema: {
          type: "object",
          properties: {
            address: { type: "string", description: "The token address" },
          },
          required: ["address"],
        },
      },
      {
        name: "get_rankings",
        description: "Get token rankings (hot, 24h volume, newest, graduated, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Ranking category (hot, 24h, newest, graduated)" },
            page: { type: "number", default: 1 },
            size: { type: "number", default: 20 },
          },
        },
      },
      {
        name: "get_onchain_info",
        description: "Fetch real-time on-chain token info (price, funds, offers, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            address: { type: "string", description: "Token address" },
          },
          required: ["address"],
        },
      },
      {
        name: "get_trade_quote",
        description: "Estimate buy or sell quotes for a token",
        inputSchema: {
          type: "object",
          properties: {
            token: { type: "string", description: "Token address" },
            side: { type: "string", enum: ["buy", "sell"] },
            amount: { type: "string", description: "Amount of tokens (for buy/sell)" },
            funds: { type: "string", description: "Amount of quote currency (for buy AMAP)" },
          },
          required: ["token", "side"],
        },
      },
      {
        name: "get_tax_rewards",
        description: "Query claimable and claimed rewards for a TaxToken holder",
        inputSchema: {
          type: "object",
          properties: {
            tokenAddress: { type: "string", description: "TaxToken address" },
            userAddress: { type: "string", description: "User wallet address" },
          },
          required: ["tokenAddress", "userAddress"],
        },
      },
      {
        name: "calculate_initial_price",
        description: "Calculate initial price of each token based on issuance parameters",
        inputSchema: {
          type: "object",
          properties: {
            maxRaising: { type: "string", description: "Max BNB to be raised in Wei" },
            totalSupply: { type: "string", description: "Total token supply in Wei" },
            offers: { type: "string", description: "Tokens available for sale in Wei" },
            reserves: { type: "string", description: "Reserved token amount in Wei" },
          },
          required: ["maxRaising", "totalSupply", "offers", "reserves"],
        },
      },
      {
        name: "is_agent_wallet",
        description: "Check if a wallet address belongs to an AI agent",
        inputSchema: {
          type: "object",
          properties: {
            address: { type: "string", description: "Wallet address" },
          },
          required: ["address"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "get_public_config": {
        const config = await getPublicConfig();
        return { content: [{ type: "text", text: JSON.stringify(config, null, 2) }] };
      }

      case "get_token_info": {
        const info = await getTokenInfo(args?.address as string);
        return { content: [{ type: "text", text: JSON.stringify(info, null, 2) }] };
      }

      case "get_rankings": {
        const rankings = await getRankings(args?.category as string, args?.page as number, args?.size as number);
        return { content: [{ type: "text", text: JSON.stringify(rankings, null, 2) }] };
      }

      case "get_onchain_info": {
        const contract = getHelperContract();
        const info = await contract.getTokenInfo(args?.address);
        const formatted = {
          version: info[0].toString(),
          tokenManager: info[1],
          quote: info[2],
          lastPrice: ethers.formatEther(info[3]),
          tradingFeeRate: (Number(info[4]) / 100).toString() + "%",
          minTradingFee: ethers.formatEther(info[5]),
          launchTime: new Date(Number(info[6]) * 1000).toISOString(),
          offers: ethers.formatEther(info[7]),
          maxOffers: ethers.formatEther(info[8]),
          funds: ethers.formatEther(info[9]),
          maxFunds: ethers.formatEther(info[10]),
          liquidityAdded: info[11],
        };
        return { content: [{ type: "text", text: JSON.stringify(formatted, null, 2) }] };
      }

      case "get_trade_quote": {
        const contract = getHelperContract();
        if (args?.side === "buy") {
          const quote = await contract.tryBuy(
            args?.token as string,
            ethers.parseEther((args?.amount as string) || "0"),
            ethers.parseEther((args?.funds as string) || "0")
          );
          return { content: [{ type: "text", text: JSON.stringify({
            estimatedAmount: ethers.formatEther(quote[2]),
            estimatedCost: ethers.formatEther(quote[3]),
            estimatedFee: ethers.formatEther(quote[4]),
            amountMsgValue: ethers.formatEther(quote[5]),
            amountApproval: ethers.formatEther(quote[6]),
          }, null, 2) }] };
        } else {
          const quote = await contract.trySell(args?.token as string, ethers.parseEther((args?.amount as string) || "0"));
          return { content: [{ type: "text", text: JSON.stringify({
            fundsReceived: ethers.formatEther(quote[2]),
            feePaid: ethers.formatEther(quote[3]),
          }, null, 2) }] };
        }
      }

      case "get_tax_rewards": {
        const contract = getTaxTokenContract(args?.tokenAddress as string);
        const claimable = await contract.claimableFee(args?.userAddress);
        const claimed = await contract.claimedFee(args?.userAddress);
        const info = await contract.userInfo(args?.userAddress);
        return { content: [{ type: "text", text: JSON.stringify({
          claimable: ethers.formatEther(claimable),
          claimed: ethers.formatEther(claimed),
          share: ethers.formatEther(info[0]),
          rewardDebt: ethers.formatEther(info[1]),
        }, null, 2) }] };
      }

      case "calculate_initial_price": {
        const contract = getHelperContract();
        const price = await contract.calcInitialPrice(
          BigInt(args?.maxRaising as string),
          BigInt(args?.totalSupply as string),
          BigInt(args?.offers as string),
          BigInt(args?.reserves as string)
        );
        return { content: [{ type: "text", text: JSON.stringify({ priceWei: price.toString(), priceEth: ethers.formatEther(price) }) }] };
      }

      case "is_agent_wallet": {
        const contract = getAgentIdentifier();
        const isAgent = await contract.isAgent(args?.address);
        return { content: [{ type: "text", text: JSON.stringify({ isAgent }) }] };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error: any) {
    return {
      content: [{ type: "text", text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("4Meme MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error starting server:", error);
  process.exit(1);
});
