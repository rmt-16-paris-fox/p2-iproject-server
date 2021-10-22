const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
	try {
		const access_token = req.headers;
		if (!access_token) {
			throw { name: "InvalidToken" };
		}
		const payload = verifyToken(access_token);
		const foundUser = await User.findOne({
			where: {
				email: payload.email,
			},
		});
		if (!foundUser) {
			throw { name: "InvalidToken" };
		} else {
			req.user = {
				id: foundUser.id,
				email: foundUser.email,
				username: foundUser.username,
			};
		}
		next();
	} catch (err) {
		next(err);
	}
};

module.exports = authentication;
