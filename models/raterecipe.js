"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RateRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RateRecipe.init(
    {
      UserId: DataTypes.INTEGER,
      RecipeId: DataTypes.STRING,
      rate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RateRecipe",
    }
  );
  return RateRecipe;
};
