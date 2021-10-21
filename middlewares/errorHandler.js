const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      const dataError = err.errors.map(item => {
        return item.message
      })
      res.status(400).json({
        message: dataError
      })
      break;
    case "InvalidRequest":
      res.status(400).json({
        message: err.message
      })
    case "NotFound":
      res.status(404).json({
        message: "Error data not found"
      })
      break;
    case "invalidEmailPass":
      res.status(401).json({
        message: "Invalid Email or Password"
      })
      break;
    case "Forbidden":
      res.status(403).json({
        message: "Forbidden dont have access"
      })
      break;
    case "NotAuthorized":
      res.status(401).json({
        message: "Please login first"
      })
      break;
    case "ImageSizeError":
      res.status(400).json({
        message: err.message
      })
      break;
    default:
      res.status(500).json(err)
      break;
  }
}

module.exports = errorHandler