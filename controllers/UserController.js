const { User } = require("../models");

const { createToken } = require("../helpers/jwt");
const { compare } = require("../helpers/bcrypt");
const { assesment } = require("../helpers/pronunciationAssesment");
class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const cek_login = await User.findOne({ where: { email: email } });

      if (!cek_login || !compare(password, cek_login.password)) {
        throw { name: "invalid login" };
      } else {
        const payload = {
          id: cek_login.id,
          name: cek_login.name,
          email: cek_login.email,
          role: cek_login.role,
        };

        const token = createToken(payload);
        res.status(200).json({ access_token: token });
      }
    } catch (err) {
      next(err);
    }
  }
  static req_user(req, res, next) {
    const user = req.user;
    res.status(200).json({ user });
  }
  static async assesment(req, res, next) {
    try {
      const base64 = req.body.base64;
      const result = await assesment(base64);
      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
