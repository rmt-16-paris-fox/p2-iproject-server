const { checkToken } = require('../helpers/jwt');

const authentication = (req, res, next) => {
  if (req.headers.access_token) {
    const payload = checkToken(req.headers.access_token);
    req.user = {
      id: payload.id,
      name: payload.name,
      email: payload.email
    }
    next();
  } else {
    throw ({ message: 'Invalid Token' })
  }
}

module.exports = authentication;