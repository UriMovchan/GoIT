const { BadRequest } = require('http-errors')

const checkId = (req, res, next) => {
  const { contactId } = req.params

  if (!contactId) {
    throw new BadRequest('id not specified')
  } else if (contactId.length !== 24) {
    throw new BadRequest('wrong id format')
  }

  next()
}

module.exports = checkId
