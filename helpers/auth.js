const { User } = require("../models");
const { hashPassword, comparePassword } = require("./bcrypt");
const { verifyToken } = require("../helpers/jwt");
const authentication = async (req, res, next) => {
  try {
    const { access_token: token } = req.headers;
    if (!token) {
      throw { name: "invalidToken" };
    }
    const payload = verifyToken(token);
    const foundUser = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });
    if (!foundUser) {
      throw { name: "invalidToken" };
    }
    req.user = {
      id: foundUser.id,
      email: foundUser.email,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
