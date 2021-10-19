'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Post)
      User.belongsToMany(models.Post, {as: 'User', through: models.Comment, foreignKey:'UserId'})
    }
  };
  User.init({
    firstName: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Name cannot be empty"}
      }
    },
    lastName: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Name cannot be empty"}
      }
    },
    email: {
      type:DataTypes.STRING,
      unique: {msg: "This email already registered!"},
      validate: {
        isEmail: {msg: "Check your email format!"},
        notEmpty: {msg: "Email cannot be empty"},
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Password cannot be empty"}
      }
    },
    gender: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Gender cannot be empty"}
      }
    },
    fakeName: {
      type:DataTypes.STRING
    },
    imageUrl: {
      type:DataTypes.STRING
    }
  }, {
    hooks:{
      beforeCreate: (user)=>{
        user.password = hashPassword(user.password)
      }
    },  
    sequelize,
    modelName: 'User',
  });
  return User;
};