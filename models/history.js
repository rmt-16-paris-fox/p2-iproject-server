'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, {
        foreignKey: "UserId"
      })
      History.belongsTo(models.Article, {
        foreignKey: "ArticleId"
      })
    }
  };
  History.init({
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "User id cannot empty"
        }
      }
    },
    ArticleId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Article id cannot empty"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title cannot empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description cannot empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};