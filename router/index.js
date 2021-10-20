const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandler')
const commentRoute = require('./comment')
const postRoute = require('./post')
const user = require('./user')
const router = require('express').Router()

router.use('/user', user)

router.use(authentication)
router.use('/posts', postRoute)
router.use('/comments', commentRoute)
router.use(errorHandler)

module.exports = router
