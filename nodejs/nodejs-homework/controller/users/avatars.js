const { User } = require('../../model/users')

module.exports = async (req, res) => {
  const { _id, avatarURL } = req.user

  const result = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true })

  res.status(200).json({ avatarURL: result.avatarURL })
}
