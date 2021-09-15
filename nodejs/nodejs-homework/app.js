const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const { api } = require('./routes')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/users', api.users)
app.use('/api/contacts', api.contacts)

app.use((_, res) => {
  res.status(404).json({ message: 'Url not found' })
})

app.use(({ status, message }, _, res, __) => {
  res.status(status).json({ message: message })
})

module.exports = app
