const bcrypt = require ('bcrypt')

function hashPassword (password) {
    const saltRounds = 8;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt)
}
function comparePassword (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}