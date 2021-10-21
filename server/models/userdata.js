"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserData.init(
    {
      UserId: DataTypes.INTEGER,
      premiumToken: DataTypes.STRING,
      testQuota: DataTypes.INTEGER,
      gradeLevel: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(instance, opt) {
          instance.premiumToken = "";
          instance.gradeLevel = 1;
        },
      },
      sequelize,
      modelName: "UserData",
    }
  );
  return UserData;
};
