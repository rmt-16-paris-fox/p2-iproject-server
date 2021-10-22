'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyClass.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id' });
      MyClass.belongsTo(models.Class, { foreignKey: 'ClassId', targetKey: 'id' });
    }
  };
  MyClass.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "UserId is required."},
        notEmpty: {msg: "UserId is required."},
      }
    },
    ClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "ClassId is required."},
        notEmpty: {msg: "ClassId is required."},
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Status is required."},
        notEmpty: {msg: "Status is required."},
      }
    }
  }, {
    hooks: {
      beforeCreate: (my_class, options) => {
        my_class.status = "Unfinished";
      },
    },
    sequelize,
    modelName: 'MyClass',
  });
  return MyClass;
};