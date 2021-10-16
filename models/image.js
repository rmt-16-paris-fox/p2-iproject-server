'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Image extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Image.belongsTo(models.Keyboard, { foreignKey: 'KeyboardId' });
		}
	}
	Image.init(
		{
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Image URL is required' },
				},
			},
			KeyboardId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Keyboard ID is required' },
				},
			},
		},
		{
			sequelize,
			modelName: 'Image',
		}
	);
	return Image;
};
