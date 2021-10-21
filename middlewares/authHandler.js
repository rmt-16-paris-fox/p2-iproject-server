const {verifyToken} = require("../helpers/generateToken");
const {User, Watchlist} = require("../models");

const authenticate = async (req,res,next) => {
    console.log(req.headers)
    const {access_token} = req.headers
    try {
        if(!access_token){
            throw {name: "NoToken"}
        }
        const payload = verifyToken(access_token)
        const findUser = await User.findOne({
            where:{
                id: payload.id,
                email: payload.email
            }
        })
        if(!findUser){
            throw {name: "UserNotFound"}
        }
        req.user = {
            id: findUser.id,
            email: findUser.email,
            role: findUser.role
        }

        next()

    } catch (err) {
        console.log(err, 'di auth')
        next(err)
    }
}

const authorize = async (req,res,next)=>{
    const UserId = req.user.id

    try {
        // cari di wishlist
        const findWatchlist = await Watchlist.findAll({
            where: {
                UserId: UserId
            }
        })
        // const findPost = await Post.findOne({
        //     where:{
        //         id: postId
        //     }
        // })

        if(!findWatchlist){
            throw {name:'watchlistNotFound'}
        }
        console.log(UserId,findWatchlist.UserId)
        if(UserId == findWatchlist.UserId){
            next()
        }else{
            throw {name: "forbidden"}
        }
    } catch (err) {
        console.log(err, 'di authz')
        next(err)
    }
}

module.exports = {authenticate,authorize}