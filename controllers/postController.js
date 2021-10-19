const imageUpload = require('../helpers/imageUpload')
const { User, Post } = require('../models/index')

class PostController {
  static async createPost(req, res, next) {
    try {
      const { content } = req.body
      let imageUrl = req.file
      const { id } = req.user
      if (!content) {
        throw ({ name: "noContent" })
      }
      const objCreate = {
        content: content,
        UserId: id
      }
      if (req.file) {
        imageUrl = await imageUpload(imageUrl)
        objCreate.imageUrl = imageUrl
      }
      await Post.create(objCreate)
      res.status(201).json({ message: "Your content has been posted!" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PostController