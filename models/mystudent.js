"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyStudent.belongsTo(models.Student, { foreignKey: "StudentId" });
      MyStudent.belongsTo(models.Class, { foreignKey: "ClassId" });
    }
  }
  MyStudent.init(
    {
      StudentId: DataTypes.INTEGER,
      ClassId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MyStudent",
    }
  );
  return MyStudent;
};
