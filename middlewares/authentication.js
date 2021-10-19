const { User } = require('../models');
const { verifyToken } = require('../helpers/tokenGenerator');

const authentication = async (req, res, next) => {
	try {
		const { access_token } = req.headers;
		if (!access_token) {
			throw { name: 'invalid token' };
		}

		const payload = verifyToken(access_token);

		const response = await User.findOne({
			where: { id: payload.id, email: payload.email },
		});

		if (!response) {
			throw { name: 'authErr' };
		}

		req.user = {
			id: response.id,
			email: response.email,
			fullName: response.fullName,
			role: response.role,
		};

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = authentication;
