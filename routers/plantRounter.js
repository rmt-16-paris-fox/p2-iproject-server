const router = require ('express').Router()
const plantRouter = require('../controllers/plantRouter')
const {uploadImage} = require('../midlewares/multer')
const midleUpload =require ('../midlewares/formData')
const authorization = require ('../midlewares/authorized')

router.get('/plants',plantRouter.showAll)
router.post('/plants', uploadImage,midleUpload, plantRouter.addPlant)
router.put('/plants/:id', authorization, uploadImage,midleUpload, plantRouter.updatePlant)
router.patch('/plants/:id',authorization, plantRouter.updateStatus)
router.delete('/plants/:id',authorization, plantRouter.deletePlant)
module.exports = router