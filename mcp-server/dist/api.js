"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRankings = exports.getTokenById = exports.getTokenInfo = exports.getPublicConfig = void 0;
const BASE_URL = 'https://four.meme/meme-api/v1';
const getPublicConfig = async () => {
    const response = await fetch(`${BASE_URL}/public/config`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
exports.getPublicConfig = getPublicConfig;
const getTokenInfo = async (address) => {
    const url = new URL(`${BASE_URL}/private/token/get`);
    url.searchParams.append('address', address);
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
exports.getTokenInfo = getTokenInfo;
const getTokenById = async (requestId) => {
    const url = new URL(`${BASE_URL}/private/token/getById`);
    url.searchParams.append('id', requestId);
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
exports.getTokenById = getTokenById;
const getRankings = async (category = 'hot', page = 1, size = 20) => {
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
exports.getRankings = getRankings;
