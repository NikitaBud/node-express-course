const express = require('express');
const {products} = require('./data');

const app = express();

app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
    res.json(products);
})

app.get('/api/v1/products/:productID', (req, res) => {
    const reqItemId = parseInt(req.params.productID);
    const reqItem = products.find((item) => item.id === reqItemId);

    if(!reqItem) {
        return res.status(404).send('That product was not found.');
    }

    res.json(reqItem);
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit, price, max, min} = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit));
    }

    if (price) {
        sortedProducts = sortedProducts.filter((item) => {
            if (max) {
                return item.price < parseInt(price);
            }
            if (min) {
                return item.price > parseInt(price);
            }
        })
    }

    if (!sortedProducts.length) {
        return res.status(200).send('No products were found that match the specified criteria.')
    }
    
    res.status(200).send(sortedProducts);
})

app.all('*', (res, req) => {
    req.status(404).send('404 not found');
})

app.listen(3000, () => {
    console.log('server is lisenting on port 3000');
})