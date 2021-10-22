"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("MyStudents", "MentorId");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("MyStudents", "MentorId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Mentors",
        },
        key: "id",
      },
      onUpdated: "cascade",
      onDeleted: "cascade",
    });
  },
};
