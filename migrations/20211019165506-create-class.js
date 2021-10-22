"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Classes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Classes");
  },
};
