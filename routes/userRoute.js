const router = require ('express').Router()

const userController = require ('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post("/authGoogle", userController.authGoogle)
router.get("/userData", userController.userData)

module.exports = router