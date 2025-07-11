import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

router.post('/api/list-products', productsController.listProducts);

export default router;
