'use strict';
const fs = require('fs')
const {hash} = require('../helpers/bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
  
   const data = JSON.parse(fs.readFileSync('./data/user.json','utf8'))
   data.forEach(el => {
    //  console.log(data);
     el.password = hash(el.password)
     el.createdAt = new Date()
     el.updatedAt = new Date ()
   });
   await queryInterface.bulkInsert('Users', data)
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Users', null, {})

  }
};
