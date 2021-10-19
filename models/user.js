'use strict';
const {encrptPassword} = require("../helpers/bcryptSection")
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
     createUsername(){
      if(!this.email){
        return ''
      }
      // console.log(this.phoneNumber)
      let email = this.email
      let random = String(Math.floor(1000 + Math.random() * 9000));
      email = email.split('@')[0].split('.')[0]
      return email + random
    }
    static associate(models) {
      // define association here
      User.hasMany(models.Watchlist)
    }
  };
  User.init({
    email: {type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {msg: 'Email is required'},
      notEmpty: {msg: 'Email is required'},
      isEmail: {msg: 'Wrong email format!'}
    }
    },
    username: {type: DataTypes.STRING,
    },
    password: {type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: 'Password is required'},
      notEmpty: {msg: 'Password is required'}
    }
    }
  }, {
    hooks:{
      beforeCreate: (instances, options) => {
        instances.password = encrptPassword(instances.password)
        instances.username =  instances.createUsername()
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};