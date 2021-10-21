'use strict';
require('dotenv').config()
const {
  Model
} = require('sequelize');
const nodemailer = require('nodemailer');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.belongsTo(models.User, {
        foreignKey: "UserId"
      })
    }
  };
  Contact.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name cannot empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot empty"
        }
      }
    },
    perusahaan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Perusahaan cannot empty"
        }
      }
    },
    topik: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Topik cannot empty"
        }
      }
    },
    pesan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Pesan cannot empty"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "User id cannot empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
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
          from: 'emaildummyaja@gmail.com',
          to: user.email,
          subject: `Congrats ${user.name} pesan kamu diterima tim dagelan`,
          text: `Hai ${user.name}, terima kasih sudah mengirim pesan, tim kami akan membalas pesan kamu kurang dari 1x24 jam. Bila ada pertanyaan atau sesuatu yang kamu ingin ketahui lebih lanjut, jangan sungkan untuk mengirim pesan lagi ya!

Best regrads

Team Dagelan`
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
      }
    },
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};