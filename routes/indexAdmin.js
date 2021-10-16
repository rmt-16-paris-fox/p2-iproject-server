const express = require('express');
const KeyboardController = require('../controllers/KeyboardController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const router = express.Router();

router.use(authentication);
router.use(authorization);
router.get('/keyboards', KeyboardController.showAllKeyboards);

module.exports = router;
