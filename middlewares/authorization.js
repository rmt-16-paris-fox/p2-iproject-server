const { Game } = require("../models");

const authorization = async (req, res, next) => {
	try {
		const UserId = +req.user.id;
		const GameId = +req.params.id;

		const foundGame = await Game.findByPk(GameId);
		if (!foundGame) {
			throw { name: "NotFound" };
		}
		if (foundGame.UserId === UserId) {
			next();
		} else {
			throw { name: "Unauthorized" };
		}
	} catch (err) {
		next(err);
	}
};

module.exports = authorization;
