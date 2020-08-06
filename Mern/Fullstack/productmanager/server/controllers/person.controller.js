const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { Title, Price, Description } = request.body;
    Person.create({
        Title,
        Price,
        Description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
