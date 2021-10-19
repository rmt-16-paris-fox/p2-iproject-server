const PostController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const upload = require('../middlewares/uploadMulter');
const postRoute = require('express').Router()

postRoute.use(authentication)
postRoute.post('/', upload.single('imageUrl'), PostController.createPost)
postRoute.delete('/:id', authorization, PostController.deletePost)
postRoute.put('/:id', authorization, upload.single('imageUrl'), PostController.editPost)

module.exports = postRoute