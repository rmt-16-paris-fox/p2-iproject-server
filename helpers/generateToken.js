const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

function createToken(obj){
    return jwt.sign(obj, secret)
}

function verifyToken(value){
    return jwt.verify(value,secret)
}
module.exports = {createToken,verifyToken}
