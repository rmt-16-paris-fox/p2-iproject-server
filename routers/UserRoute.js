const router = require('express').Router();
const UserController = require("../controllers/UserController");

router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);
router.post('/authFacebook', UserController.postOAuth);

module.exports = router;