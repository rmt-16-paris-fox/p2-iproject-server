function errorHandler(err, req, res, next) {
	let code = null;
	let message = null;

	switch (err.name) {
		case "SequelizeValidationError":
			code = 400;
			message = { message: err.errors.map((error) => error.message) };
			break;
		case "SequelizeUniqueConstraintError":
			code = 400;
			message = { message: `Email ${req.body.email} is already registered` };
			break;
		case "InvalidToken":
			code = 401;
			message = { message: "Please login first!" };
			break;
		case "JsonWebTokenError":
			code = 401;
			message = { message: "Please login first!" };
			break;
		case "InvalidCredentials":
			code = 401;
			message = { message: "Invalid email or password" };
			break;
		case "NotFound":
			code = 404;
			message = { message: "Game not found" };
			break;
		case "Unauthorized":
			code = 403;
			message = { message: "You are not authorized" };
			break;
		default:
			code = 500;
			message = { message: "Internal server error" + err.message };
	}

	res.status(code).json(message);
}

module.exports = errorHandler;
