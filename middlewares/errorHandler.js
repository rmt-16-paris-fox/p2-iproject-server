const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({ message: err.errors[0].message })
      break;
    case 'noEmail':
      res.status(400).json({ message: "Please enter your email" })
      break;
    case 'noPassword':
      res.status(400).json({ message: "Please enter your password" })
      break;
    case 'invalidUser':
      res.status(400).json({ message: "Invalid Email/Password" })
      break;
    default:
      break;
  }
}

module.exports = errorHandler