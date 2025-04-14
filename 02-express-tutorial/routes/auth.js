const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {name} = req.body;
    if (name) {
        res.cookie('name', name);
        return res.status(201).json(`Welcome ${name}!`);
    }
    res.status(400).json('Please provide credentials')
})

router.delete('/', (req, res) => {
    res.clearCookie('name');
    return res.status(200).json('User is logged off');
})

module.exports = router;