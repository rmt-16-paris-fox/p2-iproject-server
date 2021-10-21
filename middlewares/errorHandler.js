function errorHandler(err, req, res, next) {
  let code = 500;
  let msg = "Internal server error";

  if (err.name === "SequelizeUniqueConstraintError") {
    msg = err.errors[0].message;
    code = 400;
  } else if (err.name === "SequelizeValidationError") {
    msg = err.errors[0].message;
    code = 400;
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    msg = "Invalid token";
  } else if (err.name === "credentialsError") {
    msg = "wrong email/password";
    code = 401;
  }

  console.log("errors:", err);
  res.status(code).json({ msg });
}

module.exports = errorHandler;
