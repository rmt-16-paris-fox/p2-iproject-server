const express = require('express');
const ImageController = require('../controllers/ImageController');
const KeyboardController = require('../controllers/KeyboardController');
const { upload } = require('../helpers/multer');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const uploadImages = require('../middlewares/uploadImages');
const router = express.Router();

router.use(authentication);
router.use(authorization);

// ? Keyboards
router.get('/keyboards', KeyboardController.showAllKeyboards);
router.post('/keyboards', KeyboardController.addKeyboard);
router.put('/keyboards/:keyboardId', KeyboardController.editKeyboard);

// ? Images
router.post(
	'/keyboards/:keyboardId/images',
	upload.array('images', 4),
	uploadImages,
	ImageController.addImages
);

router.delete('/images', ImageController.deleteImage);

module.exports = router;
