const express = require('express');
const KeyboardController = require('../controllers/KeyboardController');
const PublicController = require('../controllers/PublicController');
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.post('/register', UserController.registerCustomer);

router.post('/login', UserController.loginCustomer);
// router.post('/login-google', PublicController.loginGoogle);

router.get('/keyboards', KeyboardController.showKeyboardGallery);

router.use(authentication);
router.post('/keyboards', KeyboardController.orderKeyboard);
router.get('/my-keyboards', KeyboardController.showMyKeyboard);

module.exports = router;
