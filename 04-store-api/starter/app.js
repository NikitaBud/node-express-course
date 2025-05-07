require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const connectionString = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_HOST}/04-STORE-API?retryWrites=true&w=majority&appName=NodeExpressProject`;
const port = process.env.PORT || 3000;

const productsRouter = require('./routes/products');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// rootes

app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products route</a>')
});

app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(connectionString);
        app.listen(port, console.log(`Server is listening port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()