"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
const nodemailer = require('nodemailer');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Game)
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: {
						args: true,
						msg: "username is required",
					},
					notNull: {
						msg: "username is required",
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: {
						args: true,
						msg: "email is required",
					},
					notNull: {
						msg: "email is required",
					},
					isEmail: {
						args: true,
						msg: "wrong format email",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "password is required",
					},
					notNull: {
						msg: "password is required",
					},
					min: {
						args: [5],
						msg: "password's minimum length is 5",
					},
				},
			},
		},
		{
			hooks: {
				beforeCreate: (user, options) => {
					user.password = hashPassword(user.password);
				
					const transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
						user: 'bernlearntocode@gmail.com',
						pass: '8YKGPUhqTcBV28P' // naturally, replace both with your real credentials or an application-specific password
						}
					});
					
					const mailOptions = {
						from: 'bernlearntocode@gmail.com',
						to: user.email,
						subject: `Hai ${user.email}`,
						text: 'Thank you for visiting F2P games app'
					};
					
					transporter.sendMail(mailOptions, function(error, info){
						if (error) {
						console.log(error);
						} else {
						res.status(200).json({msg: `Thanks ${user.email} for being a part of F2P games app`})
						}
					});
				}
			},
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
