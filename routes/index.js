const router = require('express').Router();
const usersRouter = require('./usersRouter');
const animalsRouter = require('./animalsRouter');
const authentication = require('../middlewares/authentication');

router.use(usersRouter);
router.use(authentication);
router.use(animalsRouter);

module.exports = router;