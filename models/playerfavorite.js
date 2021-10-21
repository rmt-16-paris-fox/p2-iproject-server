'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PlayerFavorite extends Model {
    static associate(models) {
      PlayerFavorite.belongsTo(models.Player);
    }
  }
  PlayerFavorite.init(
    {
      steamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true
        }
      },
      PlayerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true
        }
      }
    },
    {
      sequelize,
      modelName: 'PlayerFavorite'
    }
  );
  return PlayerFavorite;
};
