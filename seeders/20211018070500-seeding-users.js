'use strict';

const { hashingPassword } = require('../helpers/bcrypt')
const generatePassword = require("password-generator");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [{
      email: 'damar1@mail.com',
      password: hashingPassword('damar1'),
      name: 'damar1',
      status: 'active', 
      verifyCode: generatePassword(50),
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
