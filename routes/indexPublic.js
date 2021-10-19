const express = require('express');
const KeyboardController = require('../controllers/KeyboardController');
const UserController = require('../controllers/UserController');
const fetchYoutubeVideos = require('../helpers/fetchYouTube');
const { ovoPay, ovoStatus, ovoCharge } = require('../helpers/xendit');
const authentication = require('../middlewares/authentication');
const router = express.Router();

// router.post('/ovo/status', authentication, ovoStatus);
// router.post('/ovo', authentication, ovoPay);

router.post('/register', UserController.registerCustomer);
router.post('/login', UserController.loginCustomer);
router.post('/login-google', UserController.loginGoogle);

router.get('/keyboards', KeyboardController.showKeyboardGallery);
router.get('/keyboards/:id', KeyboardController.showKeyboardDetails);
router.get('/videos', fetchYoutubeVideos);

router.post('/keyboards', authentication, KeyboardController.orderKeyboard);
router.post('/ovo/charge', authentication, ovoCharge);

router.get('/my-keyboards', authentication, KeyboardController.showMyKeyboard);

module.exports = router;
