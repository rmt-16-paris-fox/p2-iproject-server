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

    case 'alreadyReviewed':
      code = 403;
      message = 'you have already reviewed this book';
      break;

    case 'notFound':
      code = 404;
      message = 'the review that you want to delete does not exist';
      break;

    case 'deleteUnauthorized':
      code = 403;
      message = 'you can only delete your own review';
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
