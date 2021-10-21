const router = require('express').Router()
const userRouter = require('./userRouter')
const plantRouter = require('./plantRounter')
const handleErrors= require('../midlewares/handlesError')
const authentication = require('../midlewares/authentication')
router.use(userRouter)

router.use(authentication)
router.use(plantRouter)


router.use(handleErrors)
module.exports = router