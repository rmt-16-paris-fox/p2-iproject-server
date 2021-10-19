const CommentController = require('../controllers/commentController')
const commentRoute = require('express').Router()

commentRoute.post('/:id', CommentController.createComment)
commentRoute.get('/:id', CommentController.getCommentByPost)
module.exports = commentRoute