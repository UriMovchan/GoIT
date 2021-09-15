const { users: model } = require('../../model')

const current = async (req, res) => {
  const { _id } = req.user

  const user = await model.User.findById(_id)

  res.status(200).json(user)
}

module.exports = current
