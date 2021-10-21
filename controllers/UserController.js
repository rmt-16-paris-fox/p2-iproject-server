const { checkPassword } = require("../helpers/bcrypt");
const { checkPremium } = require("../helpers/helpers");
const { signToken, verifyPermium } = require("../helpers/jwt");
const { User, UserData } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.create({ email, password }, { returning: true });

      await UserData.create({
        UserId: user.id,
      });

      res.status(201).json({ msg: "new user created" });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log("====================== login: ", email, password);

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "credentialsError" };
      if (!checkPassword(password, user.password))
        throw { name: "credentialsError" };

      const token = signToken({
        id: user.id,
        email: user.email,
      });

      const premium = await checkPremium(user.id);
      if (premium === undefined) throw { name: "error" };
      res.status(200).json({ access_token: token, premium });
    } catch (err) {
      next(err);
    }
  }

  static async checkPremium(req, res, next) {
    try {
      const id = req.user.id;
      let isPremium = true;

      const result = await UserData.findOne({
        where: {
          UserId: id,
        },
      });

      const premiumToken = result.premiumToken;
      const payload = verifyPermium(premiumToken);
      const user = User.findOne({
        where: {
          id: payload.userId,
          email: payload.email,
        },
      });
      if (!user) throw { name: "invalidPremiumToken" };

      const now = new Date().toISOString().split("T")[0];
      if (now > payload.expired) {
        await UserData.update({
          premiumToken: "",
        });
        isPremium = false;
      }

      res.status(200).json({
        premium: isPremium,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
