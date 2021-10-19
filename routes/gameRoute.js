const router = require('express').Router()
const gameController = require('../controllers/gameController')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.post('/', uploadImage, imageKit, gameController.createGame)
router.get('/', gameController.findAllGame)
router.get('/:id', gameController.findGameById)
router.delete('/:id',  authorization, gameController.deleteGame)

module.exports = router