const middlewareWrapper = require('./middlewareWrapper')
const validate = require('./validate')
const authenticate = require('./authenticate')
const checkId = require('./checkId')
const upload = require('./upload')
const resize = require('./resize')

module.exports = {
  middlewareWrapper,
  validate,
  authenticate,
  checkId,
  upload,
  resize,
}
