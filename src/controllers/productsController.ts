import productsService from '../services/productsService';
import { Request, Response } from '../types';

const listProducts = (req: Request, res: Response): void => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs in the request body

    if (!Array.isArray(ids)) {
      const error = new Error('"ids" must be an array.');
      (error as any).statusCode = 400; // Attach status code directly to the error object
      throw error;
    }

    const products = productsService.getProductsByIds(ids);
    res.status(200).json(products);
  } catch (error: any) {
    
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ error: error.message || 'Internal server error' });
  }
};

export default {
  listProducts,
};