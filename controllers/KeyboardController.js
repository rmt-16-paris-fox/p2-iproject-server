const { Keyboard, Image } = require('../models');

class KeyboardController {
	// * Customer
	static async showKeyboardGallery(req, res, next) {
		try {
			const response = await Keyboard.findAll({
				where: { isDone: true, isPaid: true },
				include: [Image],
				order: [['createdAt', 'DESC']],
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
				include: [Image],
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

	static async showMyKeyboard(req, res, next) {
		try {
			const UserId = Number(req.user.id);
			if (!UserId) {
				throw { name: 'invalid req.params' };
			}

			const response = await Keyboard.findAll({
				where: { UserId },
				include: [Image],
				order: [['createdAt', 'DESC']],
			});

			res.status(200).json(response);
		} catch (err) {
			next(err);
		}
	}

	// * Administrator
	static async showAllKeyboards(req, res, next) {
		try {
			const response = await Keyboard.findAll({
				order: [['createdAt', 'DESC']],
				include: [Image],
			});
			res.status(200).json(response);
		} catch (err) {
			next(err);
		}
	}

	static async addKeyboard(req, res, next) {
		try {
			const {
				name,
				mountingStyle,
				plateMaterial,
				keycaps,
				switches,
				miscellaneous,
				isDone,
				isPaid,
				UserId,
			} = req.body;

			const response = await Keyboard.create({
				name,
				mountingStyle: mountingStyle || undefined,
				plateMaterial: plateMaterial || undefined,
				keycaps,
				switches,
				miscellaneous: miscellaneous || '',
				isDone,
				isPaid,
				UserId,
			});

			res.status(201).json(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = KeyboardController;
