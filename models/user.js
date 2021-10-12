'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/passwordGenerator');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Keyboard, { foreignKey: 'UserId' });
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: { msg: 'E-mail must be unique' },
				validate: {
					notEmpty: { msg: 'E-mail is required' },
					notNull: { msg: 'E-mail is required' },
					isEmail: { msg: 'E-mail must be in e-mail format' },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Password is required' },
					notNull: { msg: 'Password is required' },
					len: {
						args: 8,
						msg: 'Minimum length for password: 8 characters',
					},
				},
			},
			fullName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Name is required' },
					notNull: { msg: 'Name is required' },
				},
			},
			role: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: 'Role is required' },
					notNull: { msg: 'Role is required' },
				},
			},
		},
		{
			hooks: {
				beforeCreate: (user, options) => {
					user.password = hashPassword(user.password);
				},
			},
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
