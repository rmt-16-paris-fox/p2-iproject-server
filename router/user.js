const UserController = require('../controllers/userController')

const user= require('express').Router()

user.post('/register', UserController.registerUser)


module.exports = user


