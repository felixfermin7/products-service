import mockData from '../mockData.js';

const filterProductsByIds = (ids) => {
  return mockData.filter((product) => ids.includes(product.id));
};

export default {
  filterProductsByIds,
};