const router = require ('express').Router()
const plantRouter = require('../controllers/plantRouter')

router.get('/plants',plantRouter)