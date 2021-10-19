const userController = require ('../controllers/userController')
const router = require ('express').Router()

router.post("/register", userController.registration);
router.post("/login", userController.login);

module.exports = router