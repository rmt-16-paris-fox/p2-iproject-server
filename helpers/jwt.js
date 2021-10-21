const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function signToken(payload) {
	return jwt.sign(payload, JWT_SECRET_KEY);
}

function verifyToken(token) {
	return jwt.verify(token, JWT_SECRET_KEY);
}

module.exports = {
	signToken,
	verifyToken,
};
