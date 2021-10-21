const {
  User
} = require('../models');
const {
  decode
} = require('../helpers/bcryptjs');
const {
  sign
} = require('../helpers/jwt');
const {
  OAuth2Client
} = require('google-auth-library');

class UserController {
  static async postRegister(req, res, next) {

    try {
      const {
        name,
        email,
        password,
      } = req.body

      const registerUser = await User.create({
        name,
        email,
        password,
        role: "client",
      })

      const dataUser = {
        id: registerUser.id,
        email: registerUser.email
      }

      if (registerUser) {
        res.status(201).json(dataUser)
      } else {
        next({
          name: "SequelizeValidationError"
        })
      }

    } catch (error) {
      next(error)
    }
  }

  static async postLogin(req, res, next) {

    try {
      const {
        email,
        password
      } = req.body

      const findUser = await User.findOne({
        where: {
          email
        }
      })

      if (findUser) {
        const checkUser = decode(password, findUser.password)

        if (checkUser) {
          const access_token = signToken({
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            role: findUser.role,
          })

          res.status(200).json({
            access_token: access_token
          })
        } else {
          next({
            name: "invalidEmailPass"
          })
        }
      } else {
        next({
          name: "NotFound"
        })
      }

    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        next({
          name: "SequelizeValidationError"
        })
      } else {
        next(error)
      }
    }
  }

  static async postOAuth(req, res, next) {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);
    const idToken = req.body.idTokenClient;

    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: CLIENT_ID
      })

      const payload = ticket.getPayload()

      const {
        email,
        name,
        locale
      } = payload

      const [user] = await User.findOrCreate({
        where: {
          email
        },
        defaults: {
          name: name,
          email: email,
          password: `${name}88TokeN`,
          role: "client",
        }
      })

      const access_token = signToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })

      res.status(201).json({
        access_token: access_token
      })

    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController