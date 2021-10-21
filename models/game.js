'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsTo(models.User)
    }
  };
  Game.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "title is required",
        },
        notNull: {
          msg: "title is required",
        },
      },
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "thumbnail is required",
        },
        notNull: {
          msg: "thumbnail is required",
        },
      },
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "short_description is required",
        },
        notNull: {
          msg: "short_description is required",
        },
      },
    },
    game_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "game_url is required",
        },
        notNull: {
          msg: "game_url is required",
        },
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "genre is required",
        },
        notNull: {
          msg: "genre is required",
        },
      },
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "platform is required",
        },
        notNull: {
          msg: "platform is required",
        },
      },
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "publisher is required",
        },
        notNull: {
          msg: "publisher is required",
        },
      },
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "developer is required",
        },
        notNull: {
          msg: "developer is required",
        },
      },
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "release_date is required",
        },
        notNull: {
          msg: "release_date is required",
        },
      },
    },
    freetogame_profile_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "freetogame_profile_url is required",
        },
        notNull: {
          msg: "freetogame_profile_url is required",
        },
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "UserId is required",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};