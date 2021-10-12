const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const router = express.Router();

const indexAdmin = require('./indexAdmin');
const indexPublic = require('./indexPublic');

router.use('/', indexPublic);
router.use('/admin', indexAdmin);

router.use(errorHandler);

module.exports = router;
