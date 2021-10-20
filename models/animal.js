'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.belongsToMany(models.User, { through: 'Payment' });
    }
  };
  Animal.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Animal cannot be null'
        },
        notEmpty: {
          msg: 'Animal cannot be empty'
        },
        isIn: {
          args: [['Ayam', 'Kerbau', 'Sapi']],
          msg: 'Must be Ayam or Kerbau or Sapi'
        }
      }
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Tax cannot be null'
        },
        notEmpty: {
          msg: 'Tax cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};