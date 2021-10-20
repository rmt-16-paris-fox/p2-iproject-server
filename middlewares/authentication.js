const {
  User
} = require('../models/');
const {
  verifyToken
} = require('../helpers/jwt');

const authentication = async (req, res, next) => {

  try {
    const {
      access_token
    } = req.headers

    if (!access_token) {

      next({
        name: "NotAuthorized"
      })

    } else {
      const checkUser = verifyToken(access_token);

      const foundUser = await User.findOne({
        where: {
          id: checkUser.id,
          email: checkUser.email
        }
      })

      if (foundUser) {
        req.user = {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role
        }

        next()
      } else {
        next({
          name: "invalidEmailPass"
        })
      }
    }
  } catch (error) {
    next(error)
  }

}

module.exports = authentication