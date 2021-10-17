const express = require('express');
const ImageController = require('../controllers/ImageController');
const KeyboardController = require('../controllers/KeyboardController');
const UserController = require('../controllers/UserController');
const { upload } = require('../helpers/multer');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const uploadImages = require('../middlewares/uploadImages');
const router = express.Router();

router.use(authentication);
router.use(authorization);

// ? Users
router.get('/users', UserController.getAllUser);

// ? Keyboards
router.get('/keyboards', KeyboardController.showAllKeyboards);
router.post('/keyboards', KeyboardController.addKeyboard);
router.put('/keyboards/:keyboardId', KeyboardController.editKeyboard);
router.patch('/keyboards/:keyboardId', KeyboardController.editStatus);

// ? Images
router.post(
	'/keyboards/:keyboardId/images',
	upload.array('images', 4),
	uploadImages,
	ImageController.addImages
);

router.delete('/images', ImageController.deleteImage);

module.exports = router;
