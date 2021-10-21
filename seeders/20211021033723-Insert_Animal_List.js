'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Animals', [
      {
        name: 'Sapi',
        tax: '50000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kerbau',
        tax: '75000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ayam',
        tax: '5000',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
