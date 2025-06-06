const jwt = require('jsonwebtoken');
const { Unauthenticated } = require('../errors');

const authenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Unauthenticated('Please provide a valid token');
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (err) {
        throw new Unauthenticated('Not authorized to access this route');
    }
}

module.exports = authenticationMiddleware;