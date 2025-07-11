import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // Middleware to parse JSON requests

app.use(routes); // Use the routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
