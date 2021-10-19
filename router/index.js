const errorHandler = require('../middlewares/errorHandler')
const user = require('./user')
const router = require('express').Router()

router.use('/user', user)
router.use(errorHandler)

module.exports = router
