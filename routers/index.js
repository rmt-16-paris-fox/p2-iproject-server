const ApiRoute = require('./ApiRoute');
const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use('/api', ApiRoute);
router.use(authentication);
router.use(errorHandler);

module.exports = router