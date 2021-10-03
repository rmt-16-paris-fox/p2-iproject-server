'use strict';
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./datas/city.json', 'utf8'))
    data.forEach(each => {
      each.createdAt = new Date()
      each.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Cities', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {})
  }
};
