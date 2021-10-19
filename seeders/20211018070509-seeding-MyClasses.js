'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('MyClasses', [{
      UserId: 1,
      ClassId: 1,
      status: 'Unfinished',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('MyClasses', null, {});
  }
};
