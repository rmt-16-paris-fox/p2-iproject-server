const { User, Game } = require("../models");
const axios = require("axios");
const { Op } = require("sequelize");
const API_GAME_KEY = process.env.API_GAME_KEY;

class GameController {
	static async createGame(req, res, next) {
		try {
			const { title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url } = req.body;

			const createdGame = await Game.create({ title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url });
			if (!createdGame) {
				throw { name: "Bad Request" };
			} else {
				res.status(201).json(createdGame);
			}
		} catch (err) {
			next(err);
		}
	}
	static async findGameDatabase(req, res, next) {
		try {
			const result = await axios({
				method: "GET",
				url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
				params: { "sort-by": "id" },
				headers: {
					"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
					"x-rapidapi-key": API_GAME_KEY,
				},
			});
			res.status(200).json(result.data);
		} catch (err) {
			next(err);
		}
	}
	static async findGameDatabaseyId(req, res, next) {
		try {
			const { id } = req.params;
			const result = await axios({
				method: "GET",
				url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
				params: { id },
				headers: {
					"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
					"x-rapidapi-key": API_GAME_KEY,
				},
			});

			res.status(200).json(result.data);
		} catch (err) {
			next(err);
		}
	}
	static async deleteBookmarks(req, res, next) {
		try {
			const { id } = req.params;
			const foundGame = await Game.findByPk(id);
			if (!foundGame) {
				throw { name: "IdNotFound" };
			} else {
				res.status(200).json({ message: `Game with id ${foundGame.id} has been deleted` });
			}
		} catch (err) {
			next(err);
		}
	}
	static async getPagination(req, res, next) {
		try {
			const { title, genre, platform, publisher, developer } = req.query;
			const pageNumber = req.query.pageNumber ? +req.query.pageNumber : 1;
			const pageLimit = req.query.pageLimit ? +req.query.pageLimit : 8;
			const pageOffset = pageNumber * pageLimit - pageLimit;
			const whereOption = {};

			if (title != "" && typeof title !== "undefined") {
				whereOption.title = {
					[Op.iLike]: "%" + title + "%",
				};
			}
			if (genre != "" && typeof genre !== "undefined") {
				whereOption.genre = {
					[Op.iLike]: "%" + genre + "%",
				};
			}
			if (platform != "" && typeof platform !== "undefined") {
				whereOption.platform = {
					[Op.iLike]: "%" + platform + "%",
				};
			}
			if (publisher != "" && typeof publisher !== "undefined") {
				whereOption.publisher = {
					[Op.iLike]: "%" + publisher + "%",
				};
			}
			if (developer != "" && typeof developer !== "undefined") {
				whereOption.developer = {
					[Op.iLike]: "%" + developer + "%",
				};
			}
			const result = await Game.findAndCountAll({
				where: whereOption,
				limit: pageLimit,
				offset: pageOffset,
				order: [["id", "ASC"]],
			});
			res.status(200).json(result);
		} catch (err) {
			next(err);
		}
	}

	static async getYoutubeLink(req, res, next) {
		try {
			const { params } = req.params;
			const result = await axios({
				method: "GET",
				url: `https://youtube-advanced-search.p.rapidapi.com/video/${params}}`,
				params: { params },
				headers: {
					"x-rapidapi-host": 'youtube-advanced-search.p.rapidapi.com',
					"x-rapidapi-key": API_GAME_KEY,
				},
			});

			res.status(200).json({url: `https://www.youtube.com/watch?v=${result.data.Data[0].video_id}`});
		} catch (err) {
			console.log(err)
			next(err);
		}
	}
	static async getBookmarks(req, res, next) {
		try {
			const UserId = req.user.id
			const NewsId  = req.params.id
	  
			if (isNaN(NewsId)) {
			  throw { name: 'IdNotNumber' }
			}
			const findNews = await News.findByPk(NewsId)
			if (!findNews) {
			  throw { name: 'IdNotFound' }
			}
			const alreadyBookmark = await Bookmark.findOne({
			  where: {
				UserId,
				NewsId
			  }
			})
			if (alreadyBookmark) {
			  throw { name: 'hasBeenBookmark' }
			}
			const createdBookmark = await Bookmark.create({
			  UserId,
			  NewsId
			})
			res.status(201).json(createdBookmark)
		  } catch (err) {
			console.log(err)
			next(err)
		  }
		}
}

module.exports = GameController;
