'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Rooms',
      'CityId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Rooms',
      'CityId',
      {}
    )
  }
};
