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
      next(err)
    }
  }
}


module.exports = CommentController