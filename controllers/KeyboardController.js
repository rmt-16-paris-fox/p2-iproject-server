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

	static async showKeyboardDetails(req, res, next) {
		try {
			const KeyboardId = Number(req.params.id);

			if (!KeyboardId) {
				throw { name: 'invalid req.params' };
			}

			const response = await Keyboard.findOne({
				where: { id: KeyboardId || null },
			});

			if (!response) {
				throw { name: 'keyboard not found' };
			}
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

	//  TODO
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
