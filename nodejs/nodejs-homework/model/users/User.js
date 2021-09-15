const { Schema, model } = require('mongoose')

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: 'avatars/default.jpeg',
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
)
const User = model('User', userSchema)

const Joi = require('joi')

const userJoi = Joi.object({
  password: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'ua'] },
    })
    .required(),
  subscription: Joi.string(),
  token: Joi.string(),
  avatarURL: Joi.string(),
})
const userVerifyJoi = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'ua'] },
    })
    .required(),
})

module.exports = {
  User,
  userJoi,
  userVerifyJoi,
}
