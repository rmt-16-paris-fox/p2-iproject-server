'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.User, { foreignKey: 'RoomId' })
      Room.belongsTo(models.City, { foreignKey: 'CityId' })
      Room.belongsTo(models.Category, { foreignKey: 'CategoryId' })
    }
  };
  Room.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Title can not be empty' }, notNull: true }
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Description can not be empty' }, notNull: true }
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Adress can not be empty' }, notNull: true }
    },
    contactInfo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'ContactInfo can not be empty' }, notNull: true }
    },
    CityId: {
      type: DataTypes.STRING,
    },
    CategoryId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};