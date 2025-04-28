const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const connectionString = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_HOST}/?retryWrites=true&w=majority&appName=NodeExpressProject`;

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Hello');
})

app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async () => {
    try {
        await connectDB(connectionString);
        app.listen(port, console.log(`Server is running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();