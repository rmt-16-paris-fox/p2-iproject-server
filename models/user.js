'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Game)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty :{ 
          args: true,
          msg: 'username is required'
        },
        notNull :{ 
          msg: 'username is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { 
          args: true,
          msg: "email is required"
        },
        notNull: { 
          msg: "email is required"
        },
        isEmail: { 
          args: true,
          msg: "wrong format email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty :{ 
          args: true,
          msg: "password is required"
        },
        notNull: { 
          msg: "password is required"
        },
        min: {
          args:[5],
          msg:"password's minimum length is 5"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};