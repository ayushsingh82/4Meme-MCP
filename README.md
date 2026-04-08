# 4Meme-MCP

MCP server + setup UI for querying `four.meme` launchpad data and helper on-chain analytics.

This repo contains:
- a Next.js app with an MCP setup panel
- an MCP server in `mcp-server/` that exposes tools over stdio

## What this MCP exposes

Tools implemented in `mcp-server/src/index.ts`:

- `get_public_config`
- `get_token_info` (input: `address`)
- `get_rankings` (input: `category`, `page`, `size`)
- `get_onchain_info` (input: `address`)
- `get_trade_quote` (input: `token`, `side`, optional `amount`, `funds`)
- `get_tax_rewards` (input: `tokenAddress`, `userAddress`)
- `calculate_initial_price` (input: `maxRaising`, `totalSupply`, `offers`, `reserves`)
- `is_agent_wallet` (input: `address`)

Data sources used:
- `https://four.meme/meme-api/v1`
- BSC RPC + helper contracts via `ethers`

## Project structure

```text
4Meme-MCP/
├── app/                       # Next.js app (includes MCP setup UI)
├── mcp-server/                # MCP server implementation
│   ├── src/
│   ├── package.json
│   └── run-mcp.sh             # stdio launcher used by Cursor/Claude
├── .cursor/mcp.json           # Project-local Cursor MCP config
└── package.json               # Root scripts (next + mcp:dev)
```

## Local development

Install dependencies:

```bash
npm install
cd mcp-server && npm install
```

Run the web app:

```bash
npm run dev
```

Run MCP server from repo root:

```bash
npm run mcp:dev
```

## MCP config

### Cursor (project-local)

Use `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "4mememcp": {
      "command": "bash",
      "args": ["${workspaceFolder}/mcp-server/run-mcp.sh"]
    }
  }
}
```

If your Cursor workspace root is the parent folder (not `4Meme-MCP`), use:

```json
{
  "mcpServers": {
    "4mememcp": {
      "command": "bash",
      "args": ["${workspaceFolder}/4Meme-MCP/mcp-server/run-mcp.sh"]
    }
  }
}
```

### Claude Desktop

Add this under `mcpServers` in:
`~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "4mememcp": {
    "command": "bash",
    "args": ["/absolute/path/to/4Meme-MCP/mcp-server/run-mcp.sh"]
  }
}
```

## Example prompts

- `Call get_rankings with category "hot", page 1, size 10`
- `Call get_token_info for address "0x..."`
- `Call get_onchain_info for address "0x..."`
- `Call get_trade_quote with token "0x...", side "buy", amount "1", funds "0"`
- `Call get_tax_rewards with tokenAddress "0x..." and userAddress "0x..."`

## Notes

- `run-mcp.sh` launches the server with `tsx` for reliable TypeScript execution.
- The MCP server communicates over stdio; restart Cursor/Claude after config changes.

