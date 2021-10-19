const errorHandler = (err, req, res, next) => {
  console.log(err.name);

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      const message = err.errors.map((el) => {
        return el.message;
      });
      res.status(400).json({ message });
      break;
      case "JsonWebTokenError":
      res.status(400).json({ message: "You must Log In first!" });
      break;
      case "Forbidden":
      res.status(401).json({ message: "Forbidden Access" });
      break;
      case "LoginFailed":
      res.status(401).json({ message: "Invalid Email/Password" });
      break;
      case "NAN":
      res.status(400).json({ message: "Invalid id" });
      break;
      case "NotFound":
      res.status(404).json({ message: "products Not Found" });
      break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
};
module.exports = errorHandler
