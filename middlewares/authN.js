const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    if (!access_token) {
      throw { name: "invalidToken" };
    }

    const result = await User.findOne({
      where: { email: payload.email },
    });

    if (!result) {
      throw { name: "invalidToken" };
    }

    req.user = {
      id: result.id,
      username: result.username,
      email: result.email,
      name: result.name,
      photo: result.photo,
      phoneNumber: result.phoneNumber,
      address: result.address,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authN };
