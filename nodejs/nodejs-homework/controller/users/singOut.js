const { NotFound } = require('http-errors')
const { users: model } = require('../../model')

const singOut = async (req, res) => {
  const user = await model.User.findByIdAndUpdate(req.user._id, { token: null })

  if (!user) {
    throw new NotFound('User not found')
  }

  res.status(204).json()
}

module.exports = singOut
