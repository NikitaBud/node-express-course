const express = require('express');
const router = express.Router();
const { getPeople, addPerson, getPerson, deletePerson } = require('../controllers/people');

router.get('/', getPeople);

router.get('/:id', getPerson);

router.post('/', addPerson);

router.delete('/:id', deletePerson);

module.exports = router;
