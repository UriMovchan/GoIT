const { Schema, model, SchemaTypes } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const contactsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Set email for contact'],
    },
    phone: {
      type: String,
      required: [true, 'Set phone for contact'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
)

contactsSchema.plugin(mongoosePaginate)

const Contact = model('contact', contactsSchema)

const Joi = require('joi')

const contactsJoi = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'ua'] },
    })
    .required(),
  phone: Joi.number().required(),
  favorite: Joi.bool(),
})

const favoriteJoi = Joi.object({
  favorite: Joi.bool().required(),
})

module.exports = { Contact, contactsJoi, favoriteJoi }
