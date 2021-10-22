const {
  Contact
} = require("../models/index")

const nodemailer = require('nodemailer');


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

      const dataContact = await Contact.create({
        name,
        email,
        perusahaan,
        topik,
        pesan,
        UserId: 1
      });

      if (dataContact) {
        res.status(201).json(dataContact);

        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        })

        const mailOptions = {
          from: dataContact.email,
          to: process.env.EMAIL,
          subject: `Email dari ${dataContact.email}`,
          text: `${dataContact.pesan}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).json({
              msg: `Terima kasih ${user.name} sudah mengirim pesan ke pada kami, tunggu sebentar ya tim kami akan membalas pesan kamu!`
            })
          }
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