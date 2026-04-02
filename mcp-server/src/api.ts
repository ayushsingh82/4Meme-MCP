const BASE_URL = 'https://four.meme/meme-api/v1';

export const getPublicConfig = async () => {
  const response = await fetch(`${BASE_URL}/public/config`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getTokenInfo = async (address: string) => {
  const url = new URL(`${BASE_URL}/private/token/get`);
  url.searchParams.append('address', address);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getTokenById = async (requestId: string) => {
  const url = new URL(`${BASE_URL}/private/token/getById`);
  url.searchParams.append('id', requestId);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getRankings = async (category: string = 'hot', page: number = 1, size: number = 20) => {
  const url = new URL(`${BASE_URL}/private/token/rankings`);
  url.searchParams.append('category', category);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('size', size.toString());
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
