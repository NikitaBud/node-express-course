let {people} = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
};

const getPerson = (req, res) => {
    const reqId = parseInt(req.params.id);
    const reqPerson = people.find((item) => item.id === reqId);

    if(!reqPerson) {
        return res.status(404).json({message: 'The person was not found.'});
    }

    res.status(200).json({success: true, person: reqPerson});
}

const addPerson = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'});
    }
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({success: true, person: name})
};

const deletePerson = (req, res) => {
    const reqId = parseInt(req.params.id);
    const existPerson = people.some(item => item.id === reqId);

    if(!existPerson) {
        return res.status(404).json({message: 'The person was not found.'});
    }

    people = people.filter(person => person.id !== reqId);
    res.status(201).json({success: true})
}

module.exports = {
    getPeople,
    addPerson,
    getPerson,
    deletePerson
}