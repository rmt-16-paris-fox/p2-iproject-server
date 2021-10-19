const { Games } = require ('../models')

const authorization = async ( req, res, next ) => {
    try {
        const userId = +req.user.id
        const GamesId = + req.params.id
    
        if (isNaN(GamesId)) {
            throw ({name: 'NotNumber'})
        }
        if (isNaN(userId)) {
            throw ({name: 'NotNumber'})
        }
        const foundNews = await Games.findByPk(GamesId)
        if (!foundGames) {
            throw ({name: 'IdNotFound'})
        }
        if (foundGames.authorId === userId || role === 'Admin') {
            next()
        } else {
            throw ({name: 'Forbidden'})
        }
    } catch (err) {
        next (err)
    }
}

module.exports = authorization