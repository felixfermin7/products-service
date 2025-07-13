import productsRepository from '../repositories/productsRepository';
import { Product } from '../types/index';

const getProductsByIds = (ids: number[]): Product[] => {
  if (!ids || ids.length === 0) {
    throw new Error('Product IDs are required');
  }

  return productsRepository.filterProductsByIds(ids);
};

export default {
  getProductsByIds,
};