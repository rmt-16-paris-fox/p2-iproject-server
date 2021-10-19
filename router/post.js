const PostController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const upload = require('../middlewares/uploadMulter');
const postRoute = require('express').Router()

postRoute.use(authentication)
postRoute.post('/', upload.single('imageUrl'), PostController.createPost)


module.exports = postRoute