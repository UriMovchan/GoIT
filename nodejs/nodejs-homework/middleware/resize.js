const Jimp = require('jimp')
const path = require('path')

module.exports = (req, res, next) => {
  const { avatarURL } = req.user
  const imgPath = path.join(__dirname, '../', 'public/', avatarURL)

  Jimp.read(imgPath, (err, img) => {
    if (err) throw err
    img
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write(imgPath) // save
  })

  next()
}
