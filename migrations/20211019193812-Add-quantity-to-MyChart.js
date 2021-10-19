'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'MyCarts',
      'qauntity',
      {
        type: Sequelize.INTEGER,
      },
      {
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'MyCarts',
      'Quantity',
      {}
    );
  }
};
