import express from 'express';
import bodyParser from 'body-parser';
import ProductRouter from './routes/product-route.js';
import { errorHandler } from './middleware/error-handler.js';
import { checkApiKey } from './middleware/auth-handler.js';
import dotenv from 'dotenv';
dotenv.config(); // Load env vars from .env file

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/products', checkApiKey, ProductRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})