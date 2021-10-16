const { User, Keyboard } = require('../models');
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

	// static async loginGoogle(req, res, next) {
	// 	try {
	// 		const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
	// 		const { google_token } = req.body;

	// 		const ticket = await client.verifyIdToken({
	// 			idToken: google_token,
	// 			audience: process.env.GOOGLE_CLIENT_ID,
	// 		});

	// 		const payload = ticket.getPayload();

	// 		const emailFromGoogle = payload.email;
	// 		const nameFromGoogle = payload.name;

	// 		let role = 'Customer';
	// 		if (emailFromGoogle === 'samuelmatthew211@gmail.com') {
	// 			role = 'Administrator';
	// 		}

	// 		const [user, created] = await User.findOrCreate({
	// 			where: { email: emailFromGoogle },
	// 			defaults: {
	// 				email: emailFromGoogle,
	// 				password: Math.random().toString(36).slice(-10),
	// 				role,
	// 				fullName: nameFromGoogle,
	// 			},
	// 		});

	// 		const tokenPayload = {
	// 			id: user.id,
	// 			email: user.email,
	// 		};

	// 		const access_token = createToken(tokenPayload);

	// 		if (created === true) {
	// 			res.status(201).json({
	// 				id: user.id,
	// 				email: user.email,
	// 				access_token: access_token,
	// 			});
	// 		} else {
	// 			res.status(200).json({ access_token });
	// 		}
	// 	} catch (err) {
	// 		next(err);
	// 	}
	// }

	static async orderKeyboard(req, res, next) {
		try {
			const {
				name,
				mountingStyle,
				plateMaterial,
				keycaps,
				switches,
				miscellaneous,
			} = req.body;

			const UserId = Number(req.user.id);

			const response = await Keyboard.create({
				name,
				mountingStyle: mountingStyle || undefined,
				plateMaterial: plateMaterial || undefined,
				keycaps,
				switches,
				miscellaneous: miscellaneous || '',
				isDone: false,
				isPaid: false,
				UserId,
			});

			res.status(201).json(response);
		} catch (err) {
			next(err);
		}
	}

	static async showKeyboardGallery(req, res, next) {
		try {
			const response = await Keyboard.findAll({
				where: { isDone: true, isPaid: true },
			});

			res.status(200).json(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = PublicController;
