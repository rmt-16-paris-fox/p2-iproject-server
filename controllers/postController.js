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

  static async deletePost(req, res, next) {
    try {
      const id = +req.params.id
      if (typeof id !== 'number' || Number.isNaN(id)) {
        throw ({ name: "invalidParams" })
      }
      const post = await Post.findByPk(id)
      if (!post) {
        throw ({ name: "postNotFound" })
      }
      await Post.destroy({
        where: {
          id
        }
      })
      res.status(200).json({ message: "Delete post success!" })
    } catch (err){
      next(err)
    }
  }
}

module.exports = PostController