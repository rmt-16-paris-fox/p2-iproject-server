const router = require('express').Router();
const ContactController = require("../controllers/ContactController");

router.post('/', ContactController.postContact);
router.get('/', ContactController.getContact);
router.delete('/:id', ContactController.deleteContact);

module.exports = router;