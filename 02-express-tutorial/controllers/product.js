const {products} = require('../data');

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProduct = (req, res) => {
    const reqItemId = parseInt(req.params.productID);
    const reqItem = products.find((item) => item.id === reqItemId);

    if(!reqItem) {
        return res.status(404).json({message: 'That product was not found.'});
    }

    res.json(reqItem);
}

module.exports = {getAllProducts, getProduct};