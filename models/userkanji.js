'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserKanji extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserKanji.init({
    UserId: DataTypes.INTEGER,
    KanjiId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    testPoint: DataTypes.INTEGER,
    testTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserKanji',
  });
  return UserKanji;
};