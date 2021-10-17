const { Image, Keyboard } = require('../models');

class ImageController {
	static async addImages(req, res, next) {
		try {
			const KeyboardId = Number(req.params.keyboardId);
			const { imageUrls } = req.body;

			if (!KeyboardId) {
				throw { name: 'invalid req.params' };
			}

			const targetKeyboard = await Keyboard.findOne({
				where: { id: KeyboardId },
			});

			if (!targetKeyboard) {
				throw { name: 'keyboard not found' };
			}

			console.log(imageUrls);

			const data = imageUrls.map((el) => {
				return { imageUrl: el, KeyboardId };
			});

			const response = await Image.bulkCreate(data);

			res.status(201).json(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ImageController;
