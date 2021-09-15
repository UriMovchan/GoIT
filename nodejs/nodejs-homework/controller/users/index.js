const signUp = require('./singUp')
const verify = require('./verify')
const reSendVerify = require('./reSendVerify')
const singIn = require('./singIn')
const singOut = require('./singOut')
const current = require('./current')
const avatars = require('./avatars')

module.exports = {
  signUp,
  verify,
  singIn,
  singOut,
  current,
  avatars,
  reSendVerify,
}
