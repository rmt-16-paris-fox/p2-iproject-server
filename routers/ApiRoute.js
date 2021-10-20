const router = require('express').Router();
const ApiController = require('../controllers/ApiController');

router.get('/ig', ApiController.getApiInstagram)
router.get('/partner', ApiController.getPartner)
router.get('/9gag', ApiController.get9GagApi)

module.exports = router