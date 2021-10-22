'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plant.belongsTo(models.User, {foreignKey:'UserId'})

    }
  };
  Plant.init({
    name: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:false
      }
    },
    category:{
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:false
      }
    },
    description: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:false
      }
    },

    price: {
      allowNull:false,
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:false
      },
   
    },
    imageUrl:{
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:false
      }
    },
    UserId :{
      allowNull:false,
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:false
      }
    },
    status:{
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:false
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.status = "active";
      },
    },
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};