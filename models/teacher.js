'use strict';
const { hashingPassword } = require('../helpers/auth');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Course, { foreignKey: 'teacherId' });
    }
  };
  Teacher.init({
    name: DataTypes.STRING,
    nipId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, { hooks: {
    beforeCreate(user) {
      user.password = hashingPassword(user.password); 
    }
  },
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};