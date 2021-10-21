const bcrypt = require("bcryptjs");

function hashPassword(password) {
  let salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function checkPassword(password, hashed) {
  return bcrypt.compareSync(password, hashed);
}

module.exports = {
  hashPassword,
  checkPassword,
};
