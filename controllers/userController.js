const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken, verifyToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class UserController {
	static async register(req, res, next) {
		try {
			const { username, email, password } = req.body;
			const createdUser = await User.create({
				username,
				email,
				password,
			});
			res.status(201).json({
				id: createdUser.id,
				username: createdUser.username,
				email: createdUser.email,
			});
		} catch (err) {
			next(err);
		}
	}
	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			const foundUser = await User.findOne({ where: { email } });
			if (!foundUser) {
				throw { name: "InvalidCredentials" };
			} else {
				const isValid = comparePassword(password, foundUser.password);

				if (!isValid) {
					throw { name: "InvalidCredentials" };
				} else {
					const access_token = signToken({
						id: foundUser.id,
						username: foundUser.username,
						email: foundUser.email,
					});
					res.status(200).json({ access_token });
				}
			}
		} catch (err) {
			console.log(err)
			next(err);
		}
	}
	static async authGoogle(req, res, next) {
		const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
        const client = new OAuth2Client(CLIENT_ID);
		try {
			const ticket = await client.verifyIdToken({
				idToken: req.body.idToken,
				audience: CLIENT_ID,
			});
			const payload = ticket.getPayload();
			const { email, given_name } = payload;
			const [user] = await User.findOrCreate({
				where: { email },
				defaults: {
					username: given_name,
					password: (Math.random() + 1).toString(36).substring(7),
				},
			});
			const access_token = signToken({
				id: user.id,
				email: user.email,
				username: user.username,
			});
			console.log(access_token);
			res.status(201).json({
				access_token,
			});
		} catch (err) {
			console.log(err);
			next(err);
		}
	}
	static async getCurrentUser(req, res, next) {
		const { access_token } = req.headers;
		try {
			const user = verifyToken(access_token);
			const foundUser = await User.findOne({ where: { id, email, username } });
			if (user) {
				res.status(200).json(user);
			} else {
				throw { name: "InvalidToken" };
			}
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UserController;
