'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      game_url: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      platform: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      developer: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      freeToGameUrl: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Games');
  }
};