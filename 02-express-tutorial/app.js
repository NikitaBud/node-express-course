const express = require('express');

const app = express();
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cookieParser = require('cookie-parser');

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toUTCString();
    console.log(method, url, time);
    next();
}

const auth = (req, res, next) => {
    const name = req.cookies.name;
    if (name) {
        req.user = name;
        next();
    } else {
        res.status(401).json({message: 'unauthorized'});
    }
}

app.use(cookieParser());
app.use(express.static('./methods-public'), logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/people', peopleRouter);
app.use('/login', authRouter);
app.use('/logout', authRouter);
app.use('/api/v1/products', productRouter);

app.get('/test', auth, (req, res) => {
    res.status(200).json({ message: `Hello ${req.user}` });
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
        return res.status(200).json({message: 'No products were found that match the specified criteria.'})
    }
    
    res.status(200).send(sortedProducts);
})

app.all('*', (req, res) => {
    res.status(404).json({message: '404 not found'});
})

app.listen(3000, () => {
    console.log('server is lisenting on port 3000');
})