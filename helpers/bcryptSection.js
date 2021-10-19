var bcrypt = require('bcryptjs');

function encrptPassword(value){
    return bcrypt.hashSync(value,10)
}

function comparePassword(value,valueHash){
    return bcrypt.compareSync(`${value}`,`${valueHash}`)
}

module.exports = {encrptPassword, comparePassword}