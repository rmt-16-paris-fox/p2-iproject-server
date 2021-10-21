const { verifyToken } = require('../helpers/auth');
const { Teacher } = require('../models');
const authentication = async (req, res, next) => {
    next();
}

module.exports = authentication;