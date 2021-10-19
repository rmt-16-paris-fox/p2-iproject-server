'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsToMany(models.User, { through: models.MyClass, foreignKey: 'ClassId'});
    }
  };
  Class.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Title is required."},
        notEmpty: {msg: "Title is required."},
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Image URL is required."},
        notEmpty: {msg: "Image URL is required."},
      }
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Instructor is required."},
        notEmpty: {msg: "Instructor is required."},
      }
    }
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};