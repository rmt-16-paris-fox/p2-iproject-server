"use strict";
const axios = require("axios");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const games = await axios({
			url: "https://www.freetogame.com/api/games?sort-by=id",
			method: "GET",
		});

		console.log(games.data);
		await queryInterface.bulkInsert(
			"Games",
			games.data.map((el) => {
				delete el.id;
				el.createdAt = new Date();
				el.updatedAt = new Date();
				return el;
			}),
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Games", null, {});
	},
};
