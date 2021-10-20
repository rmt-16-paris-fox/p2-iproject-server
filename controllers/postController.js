const imageUpload = require('../helpers/imageUpload')
const { User, Post, Comment } = require('../models/index')

class PostController {
  static async getAllPost(req, res, next) {
    try {
      const response = await Post.findAll({
        order:[['createdAt', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['fakeName', 'imageUrl']
          },
          {
            model: Comment,
            include: {
              model: User,
              attributes: ['fakeName', 'imageUrl']
            }
          }]
      })
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

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
      await Post.destroy({
        where: {
          id
        }
      })
      res.status(200).json({ message: "Delete post success!" })
    } catch (err) {
      next(err)
    }
  }

  static async editPost(req, res, next) {
    try {
      const postId = +req.params.id
      const { content } = req.body
      let imageUrl = req.file
      const objUpdate = {}
      if (content) {
        objUpdate.content = content
      }
      if (req.file) {
        imageUrl = await imageUpload(imageUrl)
        objUpdate.imageUrl = imageUrl
      }
      await Post.update(objUpdate, {
        where: {
          id: postId
        }
      })
      res.status(200).json({ message: "Post has been updated" })
    } catch (err) {
      next(err)
    }
  }

  static async getOnePost(req, res, next) {
    try {
      const id = req.params.id
      const post = await Post.findByPk(id)
      if(!post){
        throw({name:"postNotFound"})
      }
      res.status(200).json(post)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = PostController