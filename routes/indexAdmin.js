const express = require('express');
const KeyboardController = require('../controllers/KeyboardController');
const { upload } = require('../helpers/multer');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const uploadImages = require('../middlewares/uploadImages');
const router = express.Router();

router.use(authentication);
router.use(authorization);
router.get('/keyboards', KeyboardController.showAllKeyboards);
router.post('/keyboards', KeyboardController.addKeyboard);
router.post(
	'/keyboards/images/:keyboardId/',
	upload.array('images', 4),
	uploadImages,
	KeyboardController.addImages
);

module.exports = router;
