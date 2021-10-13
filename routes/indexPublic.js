const express = require('express');
const PublicController = require('../controllers/PublicController');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.post('/register', PublicController.register);
router.post('/login', PublicController.login);
router.post('/login-google', PublicController.loginGoogle);

router.use(authentication);
router.post('/keyboard', PublicController.createKeyboard);

module.exports = router;
