const { Unauthorized } = require('http-errors')
const { contacts: model } = require('../../model')

const addContact = async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    throw new Unauthorized('Please authorize to add contact')
  }

  req.body.owner = _id

  const contact = await model.Contact.create(req.body)

  res.status(201).json({ contact })
}

module.exports = addContact
