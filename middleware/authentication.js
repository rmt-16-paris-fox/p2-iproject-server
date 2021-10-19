const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if(!access_token) throw ({message:"Invalid token"})
        const dataUser = verifyToken(access_token)
        const foundUser = await User.findByPk(dataUser.id)
        if(!foundUser) throw ({message:"Invalid token"})
        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name
        }
        next()
    } catch (error) {
        if(error.name == "JsonWebTokenError"){
            res.status(401).json({message: "Invalid token"})
        } else if(error.message == "Invalid token"){
            res.status(401).json({message: "Invalid token"})
        } 
        else {
            res.status(500).json({message: "Internal server error"})
        }
    }
}

module.exports = authentication