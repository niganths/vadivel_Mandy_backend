const products = require('../data/products.json');
const Product = require('../models/productModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')

dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany({}, { timeout: false, maxTimeMS: 60000 }); // Increase timeout to 60 seconds
        console.log('Products deleted!');
        await Product.insertMany(products);
        console.log('All products added!');
    } catch (error) {
        console.log(error.message);
    }
    process.exit();
}

seedProducts();
