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
      // define association here
      User.belongsTo(models.Room, { foreignKey: 'RoomId' })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Email can not be empty' },
        isEmail: { msg: 'Must be an email format' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Password can not be empty' },
        len: {
          args: [5, undefined],
          msg: 'Password can not be less than 5 characters'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
    }, 
    occupation: {
      type: DataTypes.STRING,
    },
    RoomId: {
      type: DataTypes.INTEGER
    }, 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};