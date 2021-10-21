const express = require('express');
const router = express.Router();

const DraftController = require('../controllers/draftController');

router.post('/analyzer', DraftController.draftAnalyzer);

router.post('/composer', DraftController.draftComposer);

module.exports = router;
