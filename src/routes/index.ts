import express, { Router } from 'express';
import productsController from '../controllers/productsController';

const router: Router = express.Router();

router.post('/api/list-products', productsController.listProducts);

export default router;