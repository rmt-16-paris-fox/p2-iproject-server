const CommentController = require('../controllers/commentController')
const commentRoute = require('express').Router()

commentRoute.post('/:id', CommentController.createComment)
commentRoute.get('/:id', CommentController.getCommentByPost)
commentRoute.delete('/:commentId', CommentController.deleteCommentById)


module.exports = commentRoute