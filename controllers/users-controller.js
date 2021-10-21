const { User } = require('../models/index');

const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class UsersController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      const response = await User.create({
        username: username,
        email: email,
        password: password,
      });

      res.status(201).json({
        id: response.id,
        email: response.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const response = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!response) {
        throw { name: 'unauthorized' };
      }

      if (!comparePassword(password, response.password)) {
        throw { name: 'unauthorized' };
      }

      const payload = {
        id: response.id,
        username: response.username,
        email: response.email,
      };

      const token = createToken(payload);

      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getLoggedInUserData(req, res, next) {
    try {
      res.status(200).json(req.user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UsersController;
