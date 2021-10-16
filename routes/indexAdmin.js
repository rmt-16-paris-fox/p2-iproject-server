const express = require('express');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const router = express.Router();

router.use(authentication);
router.use(authorization);
router.get('/keyboards', (req, res) => {
	res.send('hello');
});

module.exports = router;
