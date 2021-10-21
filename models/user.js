"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.MyRecipe, { foreignKey: "UserId" });
      User.hasMany(models.RateRecipe, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      username: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username is required",
          },
          notEmpty: {
            msg: "Username is required",
          },
        },
      },
      email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
          minLength(value) {
            if (this.password.length < 6) {
              throw new Error("Password length minimal 6 character");
            }
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "default.png",
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
