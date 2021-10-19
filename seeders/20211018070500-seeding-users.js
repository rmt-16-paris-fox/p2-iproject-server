'use strict';

const { hashingPassword } = require('../helpers/bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [{
      email: 'damar1@mail.com',
      password: hashingPassword('damar1'),
      name: 'damar1',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
