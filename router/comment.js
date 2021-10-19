const CommentController = require('../controllers/commentController')
const commentRoute = require('express').Router()

commentRoute.post('/:id', CommentController.createComment)

module.exports = commentRoute