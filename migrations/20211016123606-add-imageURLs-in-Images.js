'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await [
			queryInterface.addColumn('Images', 'imageUrl2', {
				type: Sequelize.STRING,
			}),
			queryInterface.addColumn('Images', 'imageUrl3', {
				type: Sequelize.STRING,
			}),
			queryInterface.addColumn('Images', 'imageUrl4', {
				type: Sequelize.STRING,
			}),
		];
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await [
			queryInterface.removeColumn('Images', 'imageUrl2'),
			queryInterface.removeColumn('Images', 'imageUrl3'),
			queryInterface.removeColumn('Images', 'imageUrl4'),
		];
	},
};
