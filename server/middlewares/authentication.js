const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const token = req.headers.access_token;
    const payload = verifyToken(token);

    const user = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });

    console.log("authentication===================================:", user);
    req.user = {
      id: user.id,
      email: user.email,
    };

    if (!user) throw { name: "JsonWebTokenError" };

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;
