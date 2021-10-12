'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Keyboard extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Keyboard.belongsTo(models.User, { foreignKey: 'UserId' });
			Keyboard.hasMany(models.Image, { foreignKey: 'KeyboardId' });
		}
	}
	Keyboard.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Keyboard name is required' },
				},
			},
			mountingStyle: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Mounting style is required' },
				},
			},
			plateMaterial: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Plate material is required' },
				},
			},
			keycaps: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Keycaps is required' },
				},
			},
			switches: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Switches is required' },
				},
			},
			miscellaneous: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			isDone: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				validate: {
					notNull: { msg: 'Working status is required' },
				},
				defaultValue: false,
			},
			isPaid: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				validate: {
					notNull: { msg: 'Payment status is required' },
				},
				defaultValue: false,
			},
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Keyboard',
		}
	);
	return Keyboard;
};
