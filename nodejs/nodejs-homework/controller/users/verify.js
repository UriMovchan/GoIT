const { NotFound, BadRequest } = require('http-errors')
const { User } = require('../../model/users')

const html = user => `<h1>Dear ${user} your email was successfully verified`

module.exports = async (req, res) => {
  const user = await User.findOne({
    verifyToken: req.params.verificationToken,
  })
  if (!user) {
    throw new NotFound()
  }

  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null })

  res.send(html(user.email))
}
