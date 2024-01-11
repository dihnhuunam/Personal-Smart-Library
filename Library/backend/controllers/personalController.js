const db = require('../models')

// model
const Personal = db.personals

// functions

//1. Add Book
const addPersonal = async (req, res) => {

    const id = req.params.id

    let data = {
        PersonalID: id,
        'Name of library': req.body['Name of library'],
    }

    const personal = await Personal.create(data)
    res.status(200).send(personal)

}

module.exports = {
    addPersonal
}