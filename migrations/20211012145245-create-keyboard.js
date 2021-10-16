'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Keyboards', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mountingStyle: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			plateMaterial: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			keycaps: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			switches: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			miscellaneous: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			isDone: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			isPaid: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			UserId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'Users',
					},
					key: 'id',
				},
				onUpdate: 'cascade',
				onDelete: 'cascade',
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
		await queryInterface.dropTable('Keyboards');
	},
};
