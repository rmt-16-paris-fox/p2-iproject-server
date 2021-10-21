'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.History, {
        foreignKey: "ArticleId"
      })
    }
  };
  Article.init({
    judul: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Judul cannot empty"
        }
      }
    },
    isi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Isi cannot empty"
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Image cannot empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};