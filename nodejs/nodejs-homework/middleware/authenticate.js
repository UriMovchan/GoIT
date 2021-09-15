const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')

require('dotenv').config()
const { SECRET_KEY } = process.env

const { users: model } = require('../model')

const authenticate = async (req, _, next) => {
  const token = req.header('authorization')?.split(' ').splice(1, 1).join()

  if (!token) {
    throw new Unauthorized('Not authorized')
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY)

    const user = await model.User.findById(id)

    if (user.token !== token) {
      throw new Unauthorized('Not authorized')
    }

    req.user = user

    next()
  } catch (e) {
    throw new Unauthorized('Not authorized')
  }
}

module.exports = authenticate
