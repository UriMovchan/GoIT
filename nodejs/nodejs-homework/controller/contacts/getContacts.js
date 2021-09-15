const { Unauthorized } = require('http-errors')
const { contacts: model } = require('../../model')

const getContacts = async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    throw new Unauthorized('Please authorize to add contact')
  }

  const contacts = await model.Contact.find({ owner: _id }).limit(2)

  res.status(200).json({ contacts })
}

module.exports = getContacts
