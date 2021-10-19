const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({message: err.errors[0].message})
      break;
    default:
      break;
  }
}

module.exports = errorHandler