const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models')

const authentication = async (req, res, next) => {
  try {
    // console.log(req.headers);
    if (!req.headers.access_token) {
      throw {name: 'notAuthenticated'}
    }
    const payload = verifyToken(req.headers.access_token)
    let foundUser = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    })
   
      if (!foundUser) {
        throw {
          name: `invalid access Token`,
        }
      }

    req.user = {
      id: foundUser.id,
      email: foundUser.email,
      
    }

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication
