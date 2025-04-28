const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../controllers/product');

router.get('/', getAllProducts);

router.get('/:productID', getProduct);

module.exports = router;