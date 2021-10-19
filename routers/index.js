const UserRoute = require('./UserRoute');
const UserPubRoute = require('./UserPubRoute');
const ArticelRoute = require('./ArticelRoute');
const HistoryRoute = require('./HistoryRoute');
const ContactRoute = require('./ContactRoute');
const ApiRoute = require('./ApiRoute');
const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use('/user', UserRoute);
router.use('/user/pub', UserPubRoute);
router.use('/api', ApiRoute);
router.use(authentication);
router.use('/articles', ArticelRoute);
router.use('/history', HistoryRoute);
router.use('/contact', ContactRoute);
router.use(errorHandler);

module.exports = router