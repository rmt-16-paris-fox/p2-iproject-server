const { Comment, User, Post } = require('../models/index')

class CommentController {
  static async createComment(req, res, next) {
    try {
      const { id } = req.params
      const UserId = +req.user.id
      const { comment } = req.body
      if (!comment) {
        throw ({ name: "noText" })
      }
      await Comment.create({
        UserId,
        PostId: id,
        comment
      })
      res.status(201).json({ message: "comment has been posted to this post" })
    } catch (err) {
      console.log(err.name)
      next(err)
    }
  }

  static async getCommentByPost(req, res, next) {
    try {
      const postId = +req.params.id
      const response = await Comment.findAll({
        where: {
          PostId: postId
        }
      })
      res.status(200).json({ response })
    } catch (err) {
      next(err)
    }
  }
  
  static async deleteCommentById(req, res, next) {
    try {
      const { commentId: id } = req.params
      await Comment.destroy({
        where: {
          id
        }
      })
      res.status(200).json({ message: "comment has been deleted" })
    } catch (err) {
      next(err)
    }
  }
}


module.exports = CommentController