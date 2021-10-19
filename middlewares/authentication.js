const { verifyToken } = require("../helpers/jwt")
const { User } = require ('../models')

const authentication = async (req,res, next) => {
    try {   
        const token = req.headers.access_token
        if (!token) { 
            throw ({name: 'NoAuthentication'})
        }
        const payload = verifyToken(token)
        const foundUser = await User.findOne ({
            where: {
                email: payload.email
            }
        })
        if (!foundUser) {
            throw ({name: 'InvalidToken'})
        }
        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            username: foundUser.username
        }
        next()
    } catch (err) {
        next (err)
    }
}

module.exports = authentication