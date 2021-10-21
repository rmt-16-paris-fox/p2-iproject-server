const express = require('express');
const router = express.Router();

const MatchController = require('../controllers/matchController');

router.get('/:matchId', MatchController.matchAnalyzer);

module.exports = router;
