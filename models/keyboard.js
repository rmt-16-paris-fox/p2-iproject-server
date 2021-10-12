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
		}
	}
	Keyboard.init(
		{
			name: DataTypes.STRING,
			mountingStyle: DataTypes.STRING,
			plateMaterial: DataTypes.STRING,
			keycaps: DataTypes.STRING,
			switches: DataTypes.STRING,
			miscellaneous: DataTypes.STRING,
			status: DataTypes.STRING,
			UserId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Keyboard',
		}
	);
	return Keyboard;
};
