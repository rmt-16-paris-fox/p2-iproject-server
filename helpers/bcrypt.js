const bcrypt = require('bcrypt')

const hashPassword = (password) => bcrypt.hashSync(password, 8)
const verifyPassword = (passwordInput, passwordDb) => bcrypt.compareSync(passwordInput, passwordDb)


module.exports = { hashPassword, verifyPassword }
