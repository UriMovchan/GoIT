const { Forbidden } = require('http-errors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const {
  MAIL_SERVER_HOST,
  MAIL_SERVER_PORT,
  MAIL_SERVER_SECURE,
  MAIL_SERVER_USER,
  MAIL_SERVER_PASS,
} = process.env

module.exports = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    host: MAIL_SERVER_HOST,
    port: MAIL_SERVER_PORT,
    secure: MAIL_SERVER_SECURE,
    auth: {
      user: MAIL_SERVER_USER,
      pass: MAIL_SERVER_PASS,
    },
  })

  try {
    const info = await transporter.sendMail({
      from: MAIL_SERVER_USER,
      to,
      subject,
      text,
      html,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (e) {
    throw new Forbidden(e.errno)
  }
}
