"use strict";
const { UserRefreshClient } = require("google-auth-library");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Review.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      foodCode: {
        type: DataTypes.STRING,
      },
      productName: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      review: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
