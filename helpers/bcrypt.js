const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const checkPassowrd = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { hashPassword, checkPassowrd };