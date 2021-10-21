'use strict';
const {
  Model
} = require('sequelize');
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
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};