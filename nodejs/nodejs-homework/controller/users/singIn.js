const bcrypt = require('bcryptjs')
const { Unauthorized, BadRequest } = require('http-errors')
const jwt = require('jsonwebtoken')

require('dotenv').config()
const { SECRET_KEY } = process.env

const { users: model } = require('../../model')

const singIn = async (req, res) => {
  const { email, password } = req.body

  const user = await model.User.findOne({ email })

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Unauthorized('Email or password is wrong')
  }

  if (!user.verify) {
    throw new BadRequest('Email not verified')
  }

  const token = jwt.sign({ id: user._id }, SECRET_KEY)

  const updatedUser = await model.User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  )

  res.status(201).json({ updatedUser })
}

module.exports = singIn
