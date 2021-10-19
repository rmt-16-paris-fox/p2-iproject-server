const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY;

const createToken = (payload) => {
  return jwt.sign(payload, secretKey);
}

const checkToken = (token) => {
  return jwt.verify(token, secretKey);
}

module.exports = { createToken, checkToken };