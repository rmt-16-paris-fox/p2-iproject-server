const router = require('express').Router();
const Controller = require('../controllers/controller')

router.post('/videos', Controller.postVideo)
router.get('/videos', Controller.getVideo)


module.exports = router