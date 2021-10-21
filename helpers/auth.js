const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET;

const hashingPassword = (password) => {
    return bcrypt.hashSync(password, 8);
}
const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

const createToken = (payload) => {
    return jwt.sign(payload, key);
}
const verifyToken = (token) => {
    return jwt.verify(token, key);
}

module.exports = {
    hashingPassword, comparePassword, createToken, verifyToken
};