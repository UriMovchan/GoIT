const { Unauthorized, NotFound } = require('http-errors')
const { contacts: model } = require('../../model')

const getContactById = async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    throw new Unauthorized('Please authorize to add contact')
  }

  const { contactId } = req.params

  const contact = await model.Contact.findOne({
    _id: contactId,
    owner: _id,
  })

  if (!contact) {
    throw new NotFound('Contact not found')
  }

  res.status(200).json({ contact })
}

module.exports = getContactById
