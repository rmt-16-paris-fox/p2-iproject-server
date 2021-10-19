'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'imageUrl', { type: Sequelize.STRING });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'imageUrl', { });
  }
};
