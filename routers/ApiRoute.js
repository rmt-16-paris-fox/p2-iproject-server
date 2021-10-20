const router = require('express').Router();
const ApiController = require('../controllers/ApiController');

router.get('/ig', ApiController.getApiInstagram)
router.get('/partner', ApiController.getPartner)
router.get('/9gag', ApiController.get9GagApi)
router.get('/celebBirth', ApiController.celebBirth)
router.get('/celebPrice', ApiController.celebPrice)
router.get('/meme', ApiController.memeGenerator)

module.exports = router