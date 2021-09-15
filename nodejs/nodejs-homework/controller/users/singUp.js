const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { Conflict } = require('http-errors')
const { v4 } = require('uuid')

const { User } = require('../../model/users')
const sendMail = require('../../utils/sendMail')

const singUp = async (req, res) => {
  const { email, password, avatarURL } = req.body

  if (await User.findOne({ email })) {
    throw new Conflict('Email in use')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const verifyToken = v4()

  const user = await User.create({
    email,
    password: hashPassword,
    avatarURL: avatarURL ?? gravatar.url(email, {}, false),
    verifyToken,
  })

  const mail = {
    to: email,
    subject: 'Verify email',
    text: 'Please verify email',
    html: `<a href="${req.protocol}://${req.get(
      'host'
    )}/api/users/verify/${verifyToken}" target="_blank"> Link</a>`,
  }

  await sendMail(mail)

  res.status(201).json({ user })
}

module.exports = singUp
