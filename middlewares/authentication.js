const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);
    req.user = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      role: payload.role,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication };
