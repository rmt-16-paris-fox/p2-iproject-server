const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
// console.log(secret, 'ini secret')

function createToken(obj){
    return jwt.sign(obj, secret)
}

function verifyToken(value){
    return jwt.verify(value,secret)
}

// console.log(createToken({
//     id: '1',
//     email: 'tachikawa@hotmail.com'
// }))
module.exports = {createToken,verifyToken}
