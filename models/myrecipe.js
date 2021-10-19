"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MyRecipe.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  MyRecipe.init(
    {
      UserId: DataTypes.INTEGER,
      RecipeId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MyRecipe",
    }
  );
  return MyRecipe;
};
