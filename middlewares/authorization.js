const authorization = async (req, res, next) => {
	try {
		const role = req.user.role;

		if (role !== 'Administrator') {
			throw { name: 'forbidden' };
		}
		next();
	} catch (err) {
		next(err);
	}
};

module.exports = authorization;
