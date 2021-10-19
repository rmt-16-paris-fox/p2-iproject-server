'use strict';

let data = require('../class.json')
data.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  // up: async (queryInterface, Sequelize) => {
  //    await queryInterface.bulkInsert('People', [{
  //     name: 'John Doe',
  //     isBetaMember: false
  //    }], {});
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Classes', data, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Classes', null, {});
  }
};
