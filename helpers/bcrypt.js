const bcrypt = require('bcrypt');

const hashingPassword = function (password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

const comparePassword = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = { hashingPassword, comparePassword }