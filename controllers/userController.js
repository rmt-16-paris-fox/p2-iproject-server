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
      next(err)
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) {
        throw ({ name: "noEmail" })
      }
      if (!password) {
        throw ({ name: "noPassword" })
      }
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (!user || !verifyPassword(password, user.password)) {
        throw ({ name: "invalidUser" })
      }
      const payload = {
        id: user.id,
        email: email
      }
      const access_token = createToken(payload)
      res.status(200).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController