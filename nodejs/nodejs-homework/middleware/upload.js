const multer = require('multer')
const path = require('path')

const avatarDir = path.join(__dirname, '../', 'public/avatars')

const multerConfig = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, avatarDir)
  },
  filename: (req, file, cb) => {
    const filename = `${req.user._id}.${file.originalname.split('.')[1]}`
    req.user.avatarURL = `/avatars/${filename}`

    cb(null, filename)
  },
  limits: {
    fileSize: 1024,
  },
})

module.exports = multer({
  storage: multerConfig,
})
