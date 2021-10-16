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

		case 'invalid req.params':
			res.status(400).json({ message: 'Invalid req.params' });
			break;

		case 'MulterError':
			res.status(400).json({ message: 'Image fetch failed' });
			break;

		case 'imageKit error':
			res.status(400).json({ message: 'Image upload failed' });
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

		case 'forbidden':
			res.status(403).json({
				message: "You don't have permission to access",
			});
			break;

		case 'keyboard not found':
			res.status(404).json({ message: 'Keyboard not found' });
			break;

		default:
			console.log(err.name);
			console.log(err);
			res.status(500).json({ message: 'Internal Server Error' });
			break;
	}
};

module.exports = errorHandler;
