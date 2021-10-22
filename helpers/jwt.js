const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET

const signToken = function (payload){
    return jwt.sign(payload, SECRET)
}

const verifyToken = function (token){
    return jwt.verify(token, SECRET)
}

module.exports = {signToken, verifyToken};