const { User, Game, Category, History } = require ('../models')

class GameController {
    static async createGame (req, res, next) {
        try {
            const payload = {
                title: req.body.title,
                thumbnail: req.body.thumbnail,
                short_description: req.body.short_description,
                game_url: req.body.game_url,
                genre: req.body.genre,
                platform: req.body.platform,
                publisher: req.body.publisher,
                developer: req.body.developer,
                release_date: req.body.release_date,
                freeToGameUrl: req.body.freeToGameUrl
            }
            const result = await Game.create (payload)
            if (!result) {
                throw ({name: "Bad Request"})
            } else {
                res.status(201).json(result)
            }
        } catch (err) {
            next (err)
        }
    }
    static async findAllGame (req, res, next) { 
        try {
            const response = await Game.findAll( {
                include: [ User ],
                order: [
                    ['id', 'DESC']
                ]
            })
            res.status(200).json(response)
        } catch (err) {
            next (err)
        }
    }
    static async findGameById (req, res, next) {
        try {
            const { id } = req.params
            const result = await Game.findByPk(id, {
                include: [ User ]
            })
            if (result) {
                res.status(200).json(result)
            } else {
                throw ({name : 'IdNotFound'})
            }
        } catch (err) {
            next (err)
        }
    }
    static async deleteGame (req, res, next) {
        try {
            const { id } = req.params
            const foundGame = await Game.findByPk(id)
            if (!foundGame) {
                throw ({name : 'IdNotFound'})
            } else {
                res.status(200).json({ message: `Game with id ${foundGame.id} has been deleted`})
            }
        } catch (err){
            next (err)
        }
    }
}

module.exports = GameController