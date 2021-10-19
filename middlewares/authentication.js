const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { acces_token: token } = req.headers;
    if (!token) {
      throw { name: "JsonWebTokenError" };
    }
    const payload = verifyToken(token);
    const foundUser = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });
    if (!foundUser) {
      throw { name: "Forbidden" };
    }
    req.user = {
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    };

    //boleh acces
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
