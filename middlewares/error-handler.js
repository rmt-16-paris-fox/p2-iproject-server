const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case 'SequelizeValidationError':
    case 'SequelizeDatabaseError':
    case 'SequelizeUniqueConstraintError':
      code = 400;
      message = err.errors.map((el) => {
        return el.message;
      });
      break;

    case 'notLoggedIn':
      code = 401;
      message = 'please login first';
      break;

    case 'JsonWebTokenError':
    case 'invalidToken':
      code = 401;
      message = 'invalid access token';
      break;

    case 'unauthorized':
      code = 400;
      message = 'login failed, invalid email or password';
      break;

    default:
      code = 500;
      message = 'Internal Server Error';
      break;
  }

  res.status(code).json({
    message: message,
  });
};

module.exports = errorHandler;
