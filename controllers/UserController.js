const { OAuth2Client } = require("google-auth-library");
const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Op } = require("sequelize");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const passGenerator = require("generate-password");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, username, email, password, phoneNumber, address } = req.body;

      const result = await User.create({ name, username, email, password, phoneNumber, address });
      res.status(201).json({ id: result.id, username: result.username, email: result.email });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "emailEmpty" };
      }

      if (!password) {
        throw { name: "passwordEmpty" };
      }

      const result = await User.findOne({
        where: {
          [Op.or]: [{ username: email || null }, { email: email || null }],
        },
      });
      if (!result) {
        throw { name: "Invalid" };
      }

      const isValid = comparePassword(password, result.password);
      if (!isValid) {
        throw { name: "Invalid" };
      }

      const payload = {
        id: result.id,
        email: result.email,
      };

      const access_token = createToken(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async loginByGoogle(req, res, next) {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const emailGoogle = payload.email;

      const pass = passGenerator.generate({
        length: 8,
        number: true,
      });

      const [user, created] = await User.findOrCreate({
        where: {
          email: emailGoogle,
        },
        defaults: {
          username: emailGoogle,
          password: pass,
        },
      });

      const access_token = createToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({ access_token });
    } catch (err) {}
  }

  static async getUserData(req, res, next) {
    try {
      res.status(200).json(req.user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
