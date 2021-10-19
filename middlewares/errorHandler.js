const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      if (err.errors[0].path === "username") {
        res.status(400).json({ message: "Username already registered" });
      } else if (err.errors[0].path === "email") {
        res.status(400).json({ message: "Email already registered" });
      }
      break;
    case "SequelizeValidationError":
      const message = err.errors.map((err) => err.message);
      res.status(400).json({ message });
      break;
    case "emailEmpty":
      res.status(400).json({ message: "Email / username is required" });
      break;
    case "passwordEmpty":
      res.status(400).json({ message: "Password is required" });
      break;
    case "errUpload":
      res.status(400).json({ message: "Profile's photo failed to upload" });
      break;
    case "imageTypeInvalid":
      res.status(400).json({ message: "Only allowed .png, .jpg, and .jpeg" });
      break;
    case "MulterError":
      if (err.code === "LIMIT_FILE_SIZE") {
        res.status(400).json({ message: "Image size limit is 255 KB" });
      }
      break;
    case "recipeNameEmpty":
      res.status(400).json({ message: "Recipe name is required" });
      break;
    case "alreadyMyRecipe":
      res.status(400).json({ message: "This recipe is already in your recipe list" });
      break;
    case "Invalid":
      res.status(401).json({ message: "Incorrect email / username or password" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "You must login first" });
      break;
    case "forbidden":
      res.status(403).json({ message: "You have no permission access" });
      break;
    case "Error":
    case "recipeNotFound":
      res.status(404).json({ message: "Recipe not found" });
      break;
    default:
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = { errorHandler };
