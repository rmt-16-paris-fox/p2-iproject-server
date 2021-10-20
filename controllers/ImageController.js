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

			const data = imageUrls.map((el) => {
				return { imageUrl: el, KeyboardId };
			});

			const response = await Image.bulkCreate(data);

			res.status(201).json(response);
		} catch (err) {
			next(err);
		}
	}

	static async deleteImage(req, res, next) {
		try {
			const ImageId = Number(req.body.ImageId);

			if (!ImageId) {
				throw { name: 'invalid req.params' };
			}

			const targetImage = await Image.findOne({ where: { id: ImageId } });

			if (!targetImage) {
				throw { name: 'image not found' };
			}

			await Image.destroy({ where: { id: ImageId } });

			res.status(204).json({
				message: `Image with id: ${ImageId} is deleted`,
			});
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ImageController;
