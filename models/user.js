'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Product,
        {
          through: models.MyCart, foreignKey: 'UserId'
        });
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
      validate: { notEmpty: { msg: 'Email can not be empty' } }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Password can not be empty' } }
    },
    typeskin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Typeskin can not be empty' } }
    },
    CategoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};