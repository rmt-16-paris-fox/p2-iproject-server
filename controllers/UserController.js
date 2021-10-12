const { User } = require('../models');

class UserController {
	static async loginGoogle(req, res, next) {
		try {
			const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
			const { google_token } = req.body;

			const ticket = await client.verifyIdToken({
				idToken: google_token,
				audience: process.env.GOOGLE_CLIENT_ID,
			});

			const payload = ticket.getPayload();

			const emailFromGoogle = payload.email;
			const nameFromGoogle = payload.name;

			const [user, created] = await User.findOrCreate({
				where: { email: emailFromGoogle },
				defaults: {
					email: emailFromGoogle,
					password: Math.random().toString(36).slice(-10),
					role: 'Administrator',
					fullName: nameFromGoogle,
				},
			});

			const tokenPayload = {
				id: user.id,
				email: user.email,
			};

			const access_token = createToken(tokenPayload);

			if (created === true) {
				res.status(201).json({
					id: user.id,
					email: user.email,
					access_token: access_token,
				});
			} else {
				res.status(200).json({ access_token });
			}
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UserController;
