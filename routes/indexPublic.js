const express = require('express');
const PublicController = require('../controllers/PublicController');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.post('/register', PublicController.register);
router.post('/login', PublicController.login);
// router.post('/login-google', PublicController.loginGoogle);

router.get('/keyboards', PublicController.showKeyboardGallery);

router.use(authentication);
router.post('/keyboards', PublicController.orderKeyboard);

module.exports = router;
