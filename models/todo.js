'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          msg: `Title can't be empty`
        }
      }
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          msg: `Content can't be empty`
        }
      }
    },

    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          msg: `Tag can't be empty`
        }
      }
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: `todo`
    },

    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};