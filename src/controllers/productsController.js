import productsService from '../services/productsService.js';

const listProducts = (req, res) => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs in the request body

    // Throw an error if "ids" is not an array
    if (!Array.isArray(ids)) {
      const error = new Error('"ids" must be an array.');
      error.statusCode = 400; // Attach status code directly to the error object
      throw error;
    }

    const products = productsService.getProductsByIds(ids);
    res.status(200).json(products);
  } catch (error) {

    // Respond with the attached status code if available, otherwise default to 500
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ error: error.message || 'Internal server error' });
  }
};

export default {
  listProducts,
};