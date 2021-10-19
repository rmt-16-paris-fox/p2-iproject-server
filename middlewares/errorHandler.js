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
    case 'noContent':
      res.status(400).json({ message: "Please fill this field" })
      break;
    case 'invalidParams':
      res.status(400).json({ message: "Id must be a number" })
      break;
    case 'invalidToken':
    case 'JsonWebTokenError':
      res.status(401).json({ message: "Invalid Token" })
      break;
    case 'forbidden':
      res.status(403).json({ message: "forbidden access" })
      break;
    case 'postNotFound':
      res.status(404).json({ message: "Post not found" })
      break;
    default:
      break;
  }
}

module.exports = errorHandler