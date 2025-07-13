import productsService from './productsService';

describe('getProductsByIds', () => {
  it('should return products for valid IDs', () => {
    const products = productsService.getProductsByIds([1, 2]);
    expect(products).toEqual([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 2 }),
    ]);
  });

  it('should throw an error for empty IDs array', () => {
    expect(() => productsService.getProductsByIds([])).toThrow('Product IDs are required');
  });
});