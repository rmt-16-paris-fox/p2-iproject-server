const express = require('express');
const router = express.Router();

const draftRoutes = require('./draft');
const matchesRoutes = require('./matches');

router.use('/draft', draftRoutes);

router.use('/matches', matchesRoutes);

module.exports = router;
