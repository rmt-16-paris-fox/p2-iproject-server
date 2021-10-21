const router = require ('express').Router()
const plantRouter = require('../controllers/plantRouter')
const {uploadImage} = require('../midlewares/multer')
const midleUpload =require ('../midlewares/formData')

router.get('/plants',plantRouter.showAll)
router.post('/plants', plantRouter.addPlant)

router.delete('plants/:id', plantRouter.deletePlant)
module.exports = router