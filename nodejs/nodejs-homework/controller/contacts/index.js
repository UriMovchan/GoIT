const getContacts = require('./getContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const deleteContact = require('./deleteContact')
const updateContact = require('./updateContact')
const favoriteContact = require('./favoriteContact')

module.exports = {
  getContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  favoriteContact,
}
