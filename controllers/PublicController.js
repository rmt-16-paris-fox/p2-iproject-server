const { User } = require('../models');
const { comparePassword } = require('../helpers/passwordGenerator');
const { createToken } = require('../helpers/tokenGenerator');

class PublicController {
	static async register(req, res, next) {
		try {
			const { email, password, fullName } = req.body;

			const response = await User.create({
				email,
				password,
				fullName,
				role: 'Customer',
			});

			res.status(201).json({ id: response.id, email: response.email });
		} catch (err) {
			next(err);
		}
	}

	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			const response = await User.findOne({
				where: { email: email || null },
			});

			if (!response) {
				throw { name: 'unauthorized' };
			}

			if (!comparePassword(password, response.password)) {
				throw { name: 'unauthorized' };
			}

			const payload = {
				id: response.id,
				email: response.email,
			};

			const access_token = createToken(payload);

			res.status(200).json({ access_token });
		} catch (err) {
			next(err);
		}
	}
}

module.exports = PublicController;
