require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_HOST}/04-STORE-API?retryWrites=true&w=majority&appName=NodeExpressProject`;
const connectDB = require('./db/connect');
const Product = require('./models/Product');

const jsonProduct = require('./products.json');

const start = async () => {
  try {
    await connectDB(connectionString);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log('Success');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start()