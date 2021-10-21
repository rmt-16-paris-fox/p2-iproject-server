'use strict';
const {hash} = require('../helpers/bcrypt')
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
      // define association here
      User.hasMany(models.Plant,{foreignKey:'UserId'})
    }
  };
  User.init({
    username: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    email: {
      allowNull:false,
      unique:true,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    password: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    address: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    }
  }, {
    hooks:{
      beforeCreate: (user)=>{
        user.password = hash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};