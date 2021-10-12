const express = require('express');
const PublicController = require('../controllers/PublicController');
const router = express.Router();

router.use('/register', PublicController.register);
router.use('/login', PublicController.login);

module.exports = router;
