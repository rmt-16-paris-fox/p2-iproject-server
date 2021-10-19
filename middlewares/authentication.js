const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models/index')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) {
      throw ({ name: 'invalidToken' })
    }
    const payload = verifyToken(access_token)
    if (!payload) {
      throw ({ name: 'invalidToken' })
    }
    const user = await User.findByPk(payload.id)
    if (!user) {
      throw ({ name: 'invalidToken' })
    }
    req.user = {
      id : user.id,
      email : user.email
    }
    next()
  } catch (err) {
    next(err)
  }
}
module.exports = authentication