import productsRepository from '../repositories/productsRepository.js';

const getProductsByIds = (ids) => {
  if (!ids || ids.length === 0) {
    throw new Error('Product IDs are required');
  }

  return productsRepository.filterProductsByIds(ids);
};

export default {
  getProductsByIds,
};