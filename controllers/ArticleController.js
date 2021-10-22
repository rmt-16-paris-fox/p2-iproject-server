const {
  Article,
  History
} = require("../models/index")

class ArticleController {

  static async postArticle(req, res, next) {

    try {
      const {
        judul,
        isi,
        imgUrl,
      } = req.body;

      const authorId = req.user.id

      const dataArticle = await Article.create({
        judul,
        isi,
        imgUrl,
      });

      if (dataArticle) {
        res.status(201).json(dataArticle);

        await History.create({
          ArticleId: dataArticle.id,
          title: dataArticle.title,
          description: `Article entity with id ${dataArticle.id} created`,
          UserId: authorId
        })
      } else {
        next({
          name: "SequelizeValidationError"
        })
      }

    } catch (error) {
      next(error)
    }
  }

  static async getArticle(req, res, next) {
    try {
      const dataArticle = await Article.findAll({
        order: [
          ['id', 'DESC'],
        ]
      })
      res.status(200).json(dataArticle);
    } catch (error) {
      next(error)
    }
  }

  static async getArticleId(req, res, next) {

    try {
      const {
        id
      } = req.params

      const dataArticle = await Article.findByPk(id)
      if (dataArticle) {
        res.status(200).json(dataArticle);
      } else {
        next({
          name: "NotFound"
        })
      }

    } catch (error) {
      next(error)
    }
  }

  static async putArticleId(req, res, next) {

    try {
      const {
        id
      } = req.params
      const authorId = req.user.id

      const {
        judul,
        isi,
        imgUrl,
      } = req.body;

      const foundArticle = await Article.findByPk(id)

      if (foundArticle) {
        const updateArticle = await Article.update({
          judul,
          isi,
          imgUrl
        }, {
          where: {
            id
          },
          returning: true
        })

        if (updateArticle) {
          await History.create({
            ArticleId: dataArticle.id,
            title: dataArticle.title,
            description: `Article entity with id ${dataArticle.id} updated`,
            UserId: authorId
          })

          res.status(200).json(updateNews[1][0])
        } else {
          next({
            name: "SequelizeValidationError"
          })
        }

      } else {
        next({
          name: "NotFound"
        })
      }

    } catch (error) {
      next(error)
    }
  }

  static async deleteArticleId(req, res, next) {

    try {
      const {
        id
      } = req.params
      const authorId = req.user.id

      const foundArticle = await Article.findByPk(id)

      if (foundArticle) {
        const isDelete = await Article.destroy({
          where: {
            id
          }
        })

        if (isDelete) {
          res.status(200).json({
            message: `${foundArticle.judul} success to delete`
          });

          await History.create({
            ArticleId: dataArticle.id,
            title: dataArticle.title,
            description: `Article entity with id ${dataArticle.id} deleted`,
            UserId: authorId
          })
        } else {
          next({
            name: "InvalidRequest",
            message: "Invalid data to delete"
          })
        }
      } else {
        next({
          name: "NotFound"
        })
      }
    } catch (error) {
      next(error);
    }
  }

}

module.exports = ArticleController