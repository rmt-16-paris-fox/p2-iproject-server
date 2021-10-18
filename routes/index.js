const UserController = require('../controllers/userController')
const {errHandle} = require("../middlewares/errorHandler")
const router = require('express').Router()

router.post('/register', UserController.userRegister)
router.post('/login', UserController.userLogin)
router.post("/login-google", UserController.googleLogin)

router.use(errHandle)

module.exports = router