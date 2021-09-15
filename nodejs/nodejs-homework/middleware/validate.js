const { BadRequest } = require('http-errors')

const validate = schema => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body)

    if (error) {
      next(new BadRequest(error.details[0].message))
    }

    next()
  }
}

module.exports = validate
