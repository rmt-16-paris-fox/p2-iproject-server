"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name is required" },
          notNull: { meg: "Name is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "is not email" },
          notEmpty: { msg: "Name is required" },
          notNull: { meg: "Name is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is required" },
          len: {
            args: 7,
            msg: "Minimum length for password: 7 characters",
          },
          notNull: { msg: "Password is required" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "role is required" },
          notNull: { meg: "role is required" },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hash(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
