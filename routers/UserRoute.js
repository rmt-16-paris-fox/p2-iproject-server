const router = require('express').Router();
const UserController = require("../controllers/UserController");

router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);
router.post('/authGoogle', UserController.postOAuth);

module.exports = router;