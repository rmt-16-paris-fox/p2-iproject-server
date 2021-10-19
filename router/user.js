const UserController = require('../controllers/userController')

const user= require('express').Router()

user.post('/register', UserController.registerUser)
user.post('/login', UserController.loginUser)


module.exports = user


