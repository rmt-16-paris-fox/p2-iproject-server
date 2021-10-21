'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Books', 'title', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Books', 'description', {
        type: Sequelize.TEXT,
      }),
      queryInterface.addColumn('Books', 'imgUrl', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Books', 'author', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Books', 'title', {}),
      queryInterface.removeColumn('Books', 'description', {}),
      queryInterface.removeColumn('Books', 'imgUrl', {}),
      queryInterface.removeColumn('Books', 'author', {}),
    ]);
  },
};
