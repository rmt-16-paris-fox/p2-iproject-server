const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "notlikethis";

function signToken(payload) {
  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

// premium token

const key = process.env.JWT_PREMIUM_SECRET || "notlikethis";

function premiumToken(payload) {
  return jwt.sign(payload, key);
}

function verifyPermium(token) {
  return jwt.verify(token, key);
}

module.exports = {
  signToken,
  verifyToken,
  premiumToken,
  verifyPermium,
};
