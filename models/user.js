'use strict';
const { Model } = require('sequelize');

const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Book, {
        through: 'Review',
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'username cannot be empty',
          },
          notNull: {
            msg: 'username cannot be empty',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'email address already exists',
        },
        validate: {
          notEmpty: {
            msg: 'email cannot be empty',
          },
          notNull: {
            msg: 'email cannot be empty',
          },
        },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'password cannot be empty',
          },
          notNull: {
            msg: 'password cannot be empty',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
