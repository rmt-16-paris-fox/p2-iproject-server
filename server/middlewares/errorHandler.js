function errorHandler(err, req, res, next) {
  let code = 500;
  let msg = "Internal server error";

  res.status(code).json(msg);
}

module.exports = errorHandler;
