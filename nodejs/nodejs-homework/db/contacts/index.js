const fs = require('fs').promises

const path = require('path')

const contactsPath = path.format({
  root: '/',
  dir: 'db/contacts',
  name: 'contacts',
  ext: '.json',
})

async function get() {
  return JSON.parse(await fs.readFile(contactsPath))
}

async function post(data) {
  await fs.writeFile(contactsPath, JSON.stringify(data))
}

module.exports = { get, post }
