const {User,Watchlist} = require("../models")
const {comparePassword} = require("../helpers/bcryptSection")
const {createToken} = require("../helpers/generateToken")
const setCalendar = require("../helpers/googlecalendar")
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
        try {
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
                    password: randomPass
                }
            })
            const payload1 = {
                id: user.id,
                email: user.email
            }
            const token1 = createToken(payload1)
            res.status(200).json({access_token: token1})
        } catch (err) {
            console.log(err, 'err google login')
        }
    }

    static async getSchedule(req,res,next){
        try {
            //-----------------------------
            const axios = require("axios").default;
            const apiKey = process.env.FOOTBAL_APIKEY;
            
            var options = {
              method: 'GET',
              url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
              params: {league: '39', season: '2021', next: '10'},
              headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': apiKey
              }
            };

            axios.request(options)
            .then((response) => {
                let data = response.data.response
                res.status(200).json(data)
            })
            //-----------------------------
        } catch (err) {
            console.log(err, 'ini di sini')
            next(err)
        }
    }

    // static async getSchedule(req,res,next){
    //     try {
    //         //-----------------------------
    //         const fs = require('fs')
    //         const path = require("path");

    //         const readJson = JSON.parse(fs.readFileSync(path.resolve('../p2-iproject-server/helpers/test.json'), 'utf-8'))
    //         // console.log(readJson, 'iniinini')

    //         res.status(200).json(readJson)
    //         //-----------------------------
    //     } catch (err) {
    //         console.log(err, 'ini di sini')
    //         next(err)
    //     }
    // }

    static async getWatchlist(req,res,next){
        try {
            const UserId = req.user.id
            const findWatchlist = await Watchlist.findAll({
                where: {
                    UserId: UserId
                }
            })
            let newData = findWatchlist.map(el=>{
               return {
                UserId: el.UserId,
                fixturesId: el.fixturesId,
                id: el.id,
                playDate: el. playDate,
                data: JSON.parse(el.data)
               }
            })
            res.status(200).json(newData)
        } catch (err) {
            console.log(err, 'di get watchlist')
            next(err)
        }
    }

    static async getWatchlistById(req,res,next){
        try {
            const UserId = req.user.id
            const {id} = req.params
            const findWatchlist = await Watchlist.findOne({
                where: {
                    id:id
                }
            })
            let newData = {
                UserId: findWatchlist.UserId,
                fixturesId: findWatchlist.fixturesId,
                id: findWatchlist.id,
                playDate: findWatchlist. playDate,
                data: JSON.parse(findWatchlist.data)
               }
            
            res.status(200).json(newData)
        } catch (err) {
            next(err)
        }
    }

    static async addWatchlist(req,res,next){
        try {
            const UserId = req.user.id
            const Email = req.user.email
            const {fixturesId,playDate,data} = req.body
            const home = data.teams.home.name
            const away = data.teams.away.name
            let newdata = JSON.stringify(data)

            const newWatch = await Watchlist.create({
                fixturesId: fixturesId,
                UserId: UserId,
                playDate: playDate,
                data: newdata
            })
            res.status(201).json({msg: 'Added to watchlist'})

            const newDate = new Date(playDate)
            const sendMail = await sendEmail(Email,
            `You have successfully add new footbal match between ${home} and ${away} to your watchlist. Don't missed to watch it on ${newDate}.`)
            if(Email.split('@')[1] === 'gmail.com'){
                const calendar = await setCalendar({
                    day: newDate.getDate(),
                    description: `Don't forget to watch footbal match between ${home} and ${away} at ${newDate.getHours()}:${newDate.getMinutes()} WIB`,
                    email: Email,
                    time: newDate
                })
            }
        } catch (err) {
            next(err)
        }
    }
}
module.exports = UserController