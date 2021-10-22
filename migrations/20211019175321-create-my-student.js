"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MyStudents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
        onUpdated: "cascade",
        onDeleted: "cascade",
      },
      MentorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Mentors",
          },
          key: "id",
        },
        onUpdated: "cascade",
        onDeleted: "cascade",
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Students",
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
    await queryInterface.dropTable("MyStudents");
  },
};
