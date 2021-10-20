const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

const user= require('express').Router()

user.post('/register', UserController.registerUser)
user.post('/login', UserController.loginUser)
user.post('/login-google', UserController.loginGoogle)
user.use(authentication)
user.get('/', UserController.getUserData)


module.exports = user


