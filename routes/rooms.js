const router = require('express').Router()
const roomController = require('../controllers/roomController')

router.post('/', roomController.create)

router.get('/', roomController.read)

router.get('/:id', roomController.details)

router.put('/:id', roomController.edit)

router.delete('/:id', roomController.delete)

module.exports = router