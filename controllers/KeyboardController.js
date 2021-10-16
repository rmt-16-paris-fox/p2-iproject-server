const { Keyboard } = require('../models');

class KeyboardController {
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

	static async showMyKeyboard(req, res, next) {
		try {
			const UserId = Number(req.user.id);
			console.log(UserId);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = KeyboardController;
