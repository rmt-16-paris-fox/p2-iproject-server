const jsonwebtoken = require('jsonwebtoken');

function createToken(payload) {
	return jsonwebtoken.sign(payload, process.env.JWT_SECRET);
}

function verifyToken(token) {
	return jsonwebtoken.verify(token, process.env.JWT_SECRET);
}

module.exports = { createToken, verifyToken };
