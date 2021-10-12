const errorHandler = (err, req, res, next) => {
	let message;

	switch (err.name) {
		case value:
			break;

		default:
			console.log(err.name);
			console.log(err);
			res.status(500).json({ message: 'Internal Server Error' });
			break;
	}
};

module.exports = errorHandler;
