const express = require('express');
const PublicController = require('../controllers/PublicController');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.post('/register', PublicController.register);
router.post('/login', PublicController.login);

router.use(authentication);
router.get('/', (req, res) => {
	res.status(200).json(req.user);
});

module.exports = router;
