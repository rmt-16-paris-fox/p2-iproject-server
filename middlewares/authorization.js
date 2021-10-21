const { Post } = require('../models/index')


const authorization = async (req, res, next) => {
  try {
    const userId = +req.user.id
    const postId = +req.params.id
    if (typeof postId !== 'number' || Number.isNaN(postId)) {
      throw ({ name: "invalidParams" })
    }
    const post = await Post.findByPk(postId)
    if (!post) {
      throw ({ name: "postNotFound" })
    }
    if (userId !== post.UserId) {
      throw ({ name: "forbidden" })
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authorization