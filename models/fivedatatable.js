'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FiveDataTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FiveDataTable.init({
    fixture: DataTypes.TEXT,
    league: DataTypes.TEXT,
    teams: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FiveDataTable',
  });
  return FiveDataTable;
};