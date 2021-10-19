const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

function hash(password){
    return bcrypt.hashSync(password, salt)
}

function compare(password, hashedpassword){
    return bcrypt.compareSync(password, hashedpassword)
}

module.exports = {hash,compare}

// console.log((hash('anton')));
// console.log((compare('anton',hash('anton')));