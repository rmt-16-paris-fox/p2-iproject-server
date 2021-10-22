"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthDay: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      school: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GradeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Grades",
          },
          key: "id",
        },
        onUpdated: "cascade",
        onDeleted: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Students");
  },
};
