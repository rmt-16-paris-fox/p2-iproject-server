const { verifyPassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const avatar = require('../helpers/randomAvatar')
const randomName = require('../helpers/randomName')
const { User } = require('../models/index')

class UserController {
  static async registerUser(req, res, next) {
    try {
      const { firstName, lastName, email, password, gender } = req.body
      const fakeName = await randomName(gender)
      const imageUrl = await avatar(firstName)
      const response = await User.create({
        firstName,
        lastName,
        email,
        password,
        gender,
        fakeName,
        imageUrl,
      })
      res.status(201).json({ message: "Your account has been created!" })
    } catch (err) {
      console.log(err.name);
      next(err)
    }
  }

}

module.exports = UserController