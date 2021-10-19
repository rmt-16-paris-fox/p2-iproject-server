const {User} = require("../models")
const {comparePassword} = require("../helpers/bcryptSection")
const {createToken} = require("../helpers/generateToken")
const sendEmail = require("../helpers/sendMail")

class UserController{
    static async userRegister(req,res,next){
        try {
            const {email,password,phone,address} = req.body
            const register = await User.create({
                email: email,
                password: password
            },{
                returning: true
            })
            res.status(201).json({id: register.id, email:register.email})
        } catch (err) {
            next(err)
        }
    }

    static async userLogin(req,res,next){
        try {
            const {email,password} = req.body
            const findUser = await User.findOne({
                where:{
                    email: email
                }
            })
            if(!findUser){
                throw {name: "unauthorized"}
            }

            if(!comparePassword(password,findUser.password)){
                throw {name: "unauthorized"}
            }
            const payload = {
                id: findUser.id,
                email: findUser.email,
                role: findUser.role
            }
            const token = createToken(payload)
            res.status(200).json({access_token: token})
            
        } catch (err) {
            next(err)
        }
    }

    static async googleLogin(req,res,next){
        const {OAuth2Client} = require('google-auth-library');
        const client = new OAuth2Client(process.env.Oauth_clientId);
        const randomPass = Math.random().toString(36).slice(-10);
        const {token} = req.body

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.Oauth_clientId,  
        });
        const payload = ticket.getPayload();
        const emailFromGoogle = payload.email
        const [user,created] = await User.findOrCreate({
            where: {
                email: emailFromGoogle
            },
            defaults: {
                password: randomPass,
                role: "Staff"
            }
        })
        const payload1 = {
            id: user.id,
            email: user.email,
            role: user.role
        }
        const token1 = createToken(payload1)
        res.status(200).json({access_token: token1})
    }

    static async getUserCred(req,res,next){
        const {id,email,role} = req.user
        try {
            const findUser = await User.findOne({
                where: {
                    id: id
                }
            })
            const userCred = {
                id: findUser.id,
                username: findUser.username,
                email: findUser.email,
                role: findUser.role
            }
            res.status(200).json(userCred)
        } catch (err) {
            next(err)
        }
    }

    static async getSchedule(req,res,next){
        // try {
            
        // } catch (err) {
        //     next(err)
        // }
    }

    static async getWatchlist(req,res,next){
        // try {
        //     const userId = req.user.id
        // } catch (err) {
        //     next(err)
        // }
    }

    static async addWatchlist(req,res,next){
        try {
            const userId = req.user.id
            console.log(userId)
            let {id} = req.params
            console.log(id)
            const email = await sendEmail('sukses tambahin jadwal')
            console.log(email)
        } catch (err) {
            console.log(err, 'apa ii')
            next(err)
        }
    }
}
module.exports = UserController