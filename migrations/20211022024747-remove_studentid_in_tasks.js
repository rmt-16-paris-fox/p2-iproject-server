"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("Tasks", "StudentId");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("Tasks", "StudentId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Student",
        },
        key: "id",
      },
      onUpdated: "cascade",
      onDeleted: "cascade",
    });
  },
};
