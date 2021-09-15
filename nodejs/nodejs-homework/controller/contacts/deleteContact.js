const { Unauthorized, NotFound } = require('http-errors')
const { contacts: model } = require('../../model')

const deleteContact = async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    throw new Unauthorized('Please authorize to add contact')
  }

  const { contactId } = req.params

  const success = await model.Contact.findOneAndDelete({
    _id: contactId,
    owner: _id,
  })

  if (!success) {
    throw new NotFound('Contact not found')
  }

  res.status(200).json({ message: 'contact deleted' })
}

module.exports = deleteContact
