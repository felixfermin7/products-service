import mockData from '../mockData.js'; // Assuming mockData is exported from a separate file

const filterProductsByIds = (ids) => {
  return mockData.filter((product) => ids.includes(product.id));
};

export default {
  filterProductsByIds,
};