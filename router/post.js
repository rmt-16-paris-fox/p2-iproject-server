const PostController = require('../controllers/postController');
const authorization = require('../middlewares/authorization');
const upload = require('../middlewares/uploadMulter');
const postRoute = require('express').Router()

postRoute.post('/', upload.single('imageUrl'), PostController.createPost)
postRoute.get('/', PostController.getAllPost)
postRoute.get('/:id', PostController.getOnePost)
postRoute.delete('/:id', authorization, PostController.deletePost)
postRoute.put('/:id', authorization, upload.single('imageUrl'), PostController.editPost)

module.exports = postRoute