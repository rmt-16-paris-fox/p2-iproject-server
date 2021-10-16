const errorHandler = (err, req, res, next) => {
	let message;

	switch (err.name) {
		case 'SequelizeValidationError':
			message = err.errors.map((el) => el.message);
			res.status(400).json({ message });
			break;

		case 'SequelizeUniqueConstraintError':
			res.status(400).json({ message: 'E-mail must be unique' });
			break;

		case 'unauthorized':
			res.status(401).json({ message: 'Invalid e-mail / password' });
			break;

		case 'invalid token':
			res.status(401).json({ message: 'You must login first' });
			break;

		case 'authErr':
			res.status(401).json({ message: 'You are not authorized' });
			break;

		case 'JsonWebTokenError':
			res.status(401).json({ message: 'Invalid token' });
			break;

		default:
			console.log(err.name);
			console.log(err);
			res.status(500).json({ message: 'Internal Server Error' });
			break;
	}
};

module.exports = errorHandler;
