const { NotFound, BadRequest } = require('http-errors')
const { User } = require('../../model/users')

module.exports = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  })

  if (!user) {
    throw new NotFound()
  }

  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null })

  res.status(200).json('Verification email sent')
}
