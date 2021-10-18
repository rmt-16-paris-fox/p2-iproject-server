const UserController = require('../controllers/userController')
const {errHandle} = require("../middlewares/errorHandler")
const {authenticate,authorize} = require("../middlewares/authHandler")
const router = require('express').Router()

router.post('/register', UserController.userRegister)
router.post('/login', UserController.userLogin)
router.post("/login-google", UserController.googleLogin)

router.use(authenticate)

router.get('/schedule', UserController.getSchedule)
router.get('/watchlist', UserController.getWatclist)
router.post('/watchlist/:id', UserController.addWatchlist)

router.use(errHandle)

module.exports = router