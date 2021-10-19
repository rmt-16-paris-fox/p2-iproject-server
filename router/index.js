const errorHandler = require('../middlewares/errorHandler')
const postRoute = require('./post')
const user = require('./user')
const router = require('express').Router()

router.use('/user', user)
router.use('/post', postRoute)

router.use(errorHandler)

module.exports = router
