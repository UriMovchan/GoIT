const router = require('express').Router()

const {
  middlewareWrapper,
  validate,
  authenticate,
  upload,
  resize,
} = require('../../middleware')
const { users: model } = require('../../model')
const { users: ctrl } = require('../../controller')

router.post('/singUp', validate(model.userJoi), middlewareWrapper(ctrl.signUp))

router.get('/verify/:verificationToken', middlewareWrapper(ctrl.verify))
router.post(
  '/verify',
  validate(model.userVerifyJoi),
  middlewareWrapper(ctrl.reSendVerify)
)

router.post('/singIn', validate(model.userJoi), middlewareWrapper(ctrl.singIn))

router.post(
  '/singOut',
  middlewareWrapper(authenticate),
  middlewareWrapper(ctrl.singOut)
)

router.get(
  '/current',
  middlewareWrapper(authenticate),
  middlewareWrapper(ctrl.current)
)

router.patch(
  '/avatars',
  middlewareWrapper(authenticate),
  upload.single('avatar'),
  middlewareWrapper(resize),
  middlewareWrapper(ctrl.avatars)
)

module.exports = router
