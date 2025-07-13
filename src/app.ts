import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // Middleware to parse JSON requests

app.use(routes); // Use the routes

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
