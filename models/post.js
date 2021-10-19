'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
 
    static associate(models) {
      Post.belongsTo(models.User)
      Post.belongsToMany(models.User, {as: 'Post', through: models.Comment, foreignKey: 'PostId'})
    }
  };
  Post.init({
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};