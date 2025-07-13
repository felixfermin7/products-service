import mockData from '../mockData';
import { Product } from '../types/index';

const filterProductsByIds = (ids: number[]): Product[] => {
  return mockData.filter((product) => ids.includes(product.id));
};

export default {
  filterProductsByIds,
};
