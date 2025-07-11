import productsService from '../services/productsService.js';

const listProducts = (req, res) => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs in the request body
    if (!Array.isArray(ids)) {
      return res.status(400).json({ error: 'Invalid request format. "ids" must be an array.' });
    }

    const products = productsService.getProductsByIds(ids);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error in listProducts controller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  listProducts,
};