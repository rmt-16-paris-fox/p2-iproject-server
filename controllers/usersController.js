const { verifyPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { User } = require('../models');

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await User.create({ name, email, password });
      res.status(201).json({ name, email });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: {
          email
        }
      });
      if (foundUser) {
        const checkPassword = verifyPassword(password, foundUser.password);
        if (checkPassword) {
          const access_token = createToken({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
          res.status(200).json({ access_token });
        } else {
          throw ({ message: 'Invalid email / password' });
        }
      } else {
        throw ({ message: 'Invalid email / password' });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;