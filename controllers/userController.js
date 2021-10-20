const { verifyPassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const avatar = require('../helpers/randomAvatar')
const randomName = require('../helpers/randomName')
const { User } = require('../models/index')
const { OAuth2Client } = require('google-auth-library')


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

  static async getUserData(req,res,next){
    try {
      const id = +req.user.id
      const user = await User.findByPk(id, {
        attributes: ['id', 'email', 'fakeName']
      })
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      const client = new OAuth2Client(process.env.GOOGLE_AUTH)
      const { token } = req.body
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_AUTH
      });
      const payload = ticket.getPayload()
      const user = await User.findOne({
        where: { email: payload.email }
      })
      if (user) {
        const payload = {
          email: user.email,
          id: user.id
        }
        const token = createToken(payload)
        res.status(200).json({ access_token: token })
      } else {
        let password = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        for (let i = 1; i <= 8; i++) {
          let char = Math.floor(Math.random()
            * str.length + 1);
          password += str.charAt(char)
        }
        const genderOpt = ['male','female']
        const gender = genderOpt[Math.floor(Math.random() * genderOpt.length)]
        const fakeName = await randomName(gender)
        const imageUrl = await avatar(payload.given_name)
        const result = await User.create({
          firstName: payload.name,
          lastName: payload.given_name,
          email: payload.email,
          fakeName,
          imageUrl, 
          password,
          gender: gender
        })
        const user = {
          id: result.id, 
          email: result.email
        }
        const token = createToken(user)
        res.status(200).json({ access_token: token })
      }
    } catch (err) {
      console.log(err)
      next(err);
    }
  }
}

module.exports = UserController