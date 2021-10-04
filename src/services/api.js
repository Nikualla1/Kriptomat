const BASE = 'https://api.coingecko.com/api/v3';
const getAllCoinsEndpoint = `${BASE}/coins/markets`;
const chartRangeEnpoint = coinId =>
  `${BASE}/coins/${coinId}/market_chart/range`;

export {getAllCoinsEndpoint, chartRangeEnpoint};
