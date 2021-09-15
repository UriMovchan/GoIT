const router = require('express').Router()
const {
  middlewareWrapper,
  validate,
  authenticate,
  checkId,
} = require('../../middleware')
const { contacts: model } = require('../../model')

const { contacts: ctrl } = require('../../controller')

router.get(
  '/',
  middlewareWrapper(authenticate),
  middlewareWrapper(ctrl.getContacts)
)

router.get(
  '/:contactId',
  middlewareWrapper(authenticate),
  middlewareWrapper(checkId),
  middlewareWrapper(ctrl.getContactById)
)

router.post(
  '/',
  middlewareWrapper(authenticate),
  validate(model.contactsJoi),
  middlewareWrapper(ctrl.addContact)
)

router.delete(
  '/:contactId',
  middlewareWrapper(authenticate),
  middlewareWrapper(ctrl.deleteContact)
)

router.put(
  '/:contactId',
  middlewareWrapper(authenticate),
  validate(model.contactsJoi),
  middlewareWrapper(checkId),
  middlewareWrapper(ctrl.updateContact)
)

router.patch(
  '/:contactId',
  middlewareWrapper(authenticate),
  validate(model.favoriteJoi),
  middlewareWrapper(checkId),
  middlewareWrapper(ctrl.favoriteContact)
)

module.exports = router
