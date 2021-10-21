'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {}
  }
  Player.init(
    {
      steamId: {
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
      modelName: 'Player'
    }
  );
  return Player;
};
