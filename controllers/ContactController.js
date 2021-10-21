const {
  Contact
} = require("../models/index")

class ContactController {

  static async postContact(req, res, next) {

    try {
      const {
        name,
        email,
        perusahaan,
        topik,
        pesan
      } = req.body;

      const authorId = req.user.id

      const dataContact = await Contact.create({
        name,
        email,
        perusahaan,
        topik,
        pesan,
        UserId: authorId
      });

      if (dataContact) {
        res.status(201).json(dataContact);
      } else {
        next({
          name: "SequelizeValidationError"
        })
      }

    } catch (error) {
      next(error)
    }
  }

  static async getContact(req, res, next) {
    try {
      const dataContact = await Contact.findAll({
        order: [
          ['id', 'DESC'],
        ]
      })
      res.status(200).json(dataContact);
    } catch (error) {
      next(error)
    }
  }

  static async deleteContact(req, res, next) {

    try {
      const {
        id
      } = req.params
      const authorId = req.user.id

      const foundContact = await Contact.findByPk(id)

      if (foundContact) {
        const isDelete = await Contact.destroy({
          where: {
            id
          }
        })

        if (isDelete) {
          res.status(200).json({
            message: `${foundContact.name} success to delete`
          });
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

module.exports = ContactController