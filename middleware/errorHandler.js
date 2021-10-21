"use strict";
const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  // let code = 500;
  // let message = ["Internal server error"];
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "loginEmailBadRequest":
      res.status(400).json({ message: "Email is required" });
      break;
    case "loginPasswordBadRequest":
      res.status(400).json({ message: "Password is required" });
      break;
    case "unauthorized":
      res.status(401).json({ message: "Invalid email/password" });
      break;
    case "invalidToken":
      res.status(401).json({ message: "Invalid token" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid token" });
    case "ReferenceError":
      res.status(402).json({ message: "invalid token" });
      break;
    default:
      res.status(500).json(err);
      break;
  }
};
module.exports = errorHandler;
