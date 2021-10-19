const UserController = require('../controllers/userController')
const {errHandle} = require("../middlewares/errorHandler")
const {authenticate,authorize} = require("../middlewares/authHandler")
const router = require('express').Router()

router.post('/register', UserController.userRegister)
router.post('/login', UserController.userLogin)
router.post("/login-google", UserController.googleLogin)

router.use(authenticate)

router.get('/schedule', UserController.getSchedule)
router.get('/watchlist', UserController.getWatchlist)
router.post('/watchlist', UserController.addWatchlist)
router.get('/watchlist/:id', UserController.getWatchlistById)

router.use(errHandle)

module.exports = router