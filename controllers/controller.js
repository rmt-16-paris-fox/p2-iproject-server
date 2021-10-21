const { User, Review, Favourite } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.AUDIENCE);

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const response = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({ id: response.id, email: response.email });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const response = await User.findOne({ where: { email: email || null } });
      if (!response) {
        throw { name: "unauthorized" };
      }
      if (!comparePassword(password, response.password)) {
        throw { name: "unauthorized" };
      }
      const payload = {
        id: response.id,
        email: response.email,
      };
      const token = signToken(payload);
      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
  static async newreview(req, res, next) {
    try {
      const userId = req.user.id;
      const { foodCode, productName, image, description, review } = req.body;
      const response = await Review.create({
        userId,
        foodCode,
        productName,
        image,
        description,
        review,
      });
      if (response) {
        res.status(201).json({ response });
      }
    } catch (err) {
      next(err);
    }
  }
  static async newfavourite(req, res, next) {
    try {
      const userId = req.user.id;
      const { foodCode, productName, image, description } = req.body;
      console.log(userId, req.body);
      const response = await Favourite.create({
        userId,
        foodCode,
        productName,
        image,
        description,
      });
      if (response) {
        res.status(201).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async getreview(req, res, next) {
    try {
      const userId = req.user.id;
      const { foodCode, productName, image, description, review } = req.body;
      const response = await Review.findAll({
        where: { userId },
        order: [["createdAt", "DESC"]],
      });
      if (!response) {
        throw { name: "ReviewNotFound" };
      }
      if (response) {
        res.status(201).json({ response });
      }
    } catch (err) {
      next(err);
    }
  }
  static async getfavourite(req, res, next) {
    try {
      const userId = req.user.id;
      const response = await Favourite.findAll({
        where: { userId },
        order: [["createdAt", "DESC"]],
      });
      if (!response) {
        throw { name: "FavouriteNotFound" };
      }
      if (response) {
        res.status(201).json({ response });
      }
    } catch (err) {
      next(err);
    }
  }
  static async googleLogin(req, res, next) {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.AUDIENCE,
        // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      const nameGoogle = payload.name;
      const emailFromGoogle = payload.email;
      const [user, isCreated] = await User.findOrCreate({
        where: {
          email: emailFromGoogle,
        },
        defaults: {
          name: nameGoogle,
          email: emailFromGoogle,
          password: "password",
        },
      });
      console.log(user);
      console.log(isCreated);
      const tokenFromServer = require("jsonwebtoken").sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET
      );
      res.status(200).json({ access_token: tokenFromServer });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Controller;
