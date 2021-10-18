const {verifyToken} = require("../helpers/generateToken");
// const {User, Post} = require("../models");

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
        next(err)
    }
}

const authorize = async (req,res,next)=>{
    const userId = req.user.id
    const {id} = req.params

    try {
        // cari di wishlist
        // const findPost = await Post.findOne({
        //     where:{
        //         id: postId
        //     }
        // })

        // if(!findPost){
        //     throw {name:'postNotFound'}
        // }

        if(userId === Wishlist.UserId){
            next()
        }else{
            throw {name: "forbidden"}
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {authenticate,authorize,authorizeCustomer}