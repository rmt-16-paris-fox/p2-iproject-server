'use strict';
const {
  Model
} = require('sequelize');
const {
  encode
} = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History, {
        foreignKey: "UserId"
      })
      User.hasMany(models.Contact, {
        foreignKey: "UserId"
      })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "name cannot empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email must bu unique"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "email cannot empty"
        },
        isEmail: {
          args: true,
          msg: "Email format is wrong"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "cannot empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "cannot empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        user.password = encode(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};