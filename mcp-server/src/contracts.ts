import { ethers } from 'ethers';

export const BSC_RPC = 'https://bsc-dataseed.binance.org/';
export const TOKEN_MANAGER_HELPER_3 = '0xF251F83e40a78868FcfA3FA4599Dad6494E46034';

export const HELPER_ABI = [
  'function getTokenInfo(address token) external view returns (uint256 version, address tokenManager, address quote, uint256 lastPrice, uint256 tradingFeeRate, uint256 minTradingFee, uint256 launchTime, uint256 offers, uint256 maxOffers, uint256 funds, uint256 maxFunds, bool liquidityAdded)',
  'function tryBuy(address token, uint256 amount, uint256 funds) external view returns (address tokenManager, address quote, uint256 estimatedAmount, uint256 estimatedCost, uint256 estimatedFee, uint256 amountMsgValue, uint256 amountApproval, uint256 amountFunds)',
  'function trySell(address token, uint256 amount) external view returns (address tokenManager, address quote, uint256 funds, uint256 fee)',
  'function calcInitialPrice(uint256 maxRaising, uint256 totalSupply, uint256 offers, uint256 reserves) external view returns (uint256 priceWei)',
];

export const TAX_TOKEN_ABI = [
  'function claimableFee(address account) view public returns (uint256)',
  'function claimedFee(address account) view public returns (uint256)',
  'function userInfo(address) view public returns (uint256 share, uint256 rewardDebt, uint256 claimable, uint256 claimed)',
];

export const AGENT_IDENTIFIER = '0x09B44A633de9F9EBF6FB9Bdd5b5629d3DD2cef13';
export const AGENT_IDENTIFIER_ABI = [
  'function isAgent(address wallet) external view returns (bool)',
  'function nftCount() external view returns (uint256)',
  'function nftAt(uint256 index) external view returns (address)',
];

export const getHelperContract = () => {
  const provider = new ethers.JsonRpcProvider(BSC_RPC);
  return new ethers.Contract(TOKEN_MANAGER_HELPER_3, HELPER_ABI, provider);
};

export const getTaxTokenContract = (address: string) => {
  const provider = new ethers.JsonRpcProvider(BSC_RPC);
  return new ethers.Contract(address, TAX_TOKEN_ABI, provider);
};

export const getAgentIdentifier = () => {
  const provider = new ethers.JsonRpcProvider(BSC_RPC);
  return new ethers.Contract(AGENT_IDENTIFIER, AGENT_IDENTIFIER_ABI, provider);
};
