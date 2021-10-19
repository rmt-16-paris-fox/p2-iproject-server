const { User } = require ('../models')
const { comparePassword } = require ('../helpers/bcrypt')
const { signToken, verifyToken } = require ('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

class UserController {
    static async register (req, res, next) {
        try {
            const payload = { 
                username: req.body.username, 
                email: req.body.email, 
                password: req.body.password
             }
            const response = await User.create (payload)
            res.status(201).json({
                id: response.id, 
                email: response.email, 
                username: req.body.username, 
            })
        } catch (err) {
            next (err)
        }
    }
    static async login (req, res, next) {
        try {
            const { email, password } = req.body

            const response = await User.findOne ({where: { email } })

            if (!response) {
                throw {name: "unauthorized"}
            }
            if (!comparePassword(password, response.password)) {
                throw {name: "unauthorized"}
            }
            const payload = {
                id: response.id,
                email: response.email,
                username: response.username,
            }
            const access_token = signToken(payload)
            res.status(200).json({access_token})

        } catch (err) {
            next (err)
        }
    }
    static async authGoogle (req, res, next) {
        const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
        const client = new OAuth2Client(CLIENT_ID);
  
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.idToken,
                audience: CLIENT_ID
                
            })
            const payload = ticket.getPayload()
    
            const {email, name, picture, given_name} = payload
            
            const [user] = await User.findOrCreate({
                where: {
                    email
                },
                defaults: {
                    username: given_name,
                    password: (Math.random() + 1).toString(36).substring(7)
                }
            })
            const access_token = signToken ({
                id: user.id,
                email: user.email,
                username: user.username
            })
 
            res.status(201).json({
                access_token
            })
        } catch (err) { 
            next (err)
        }
    }

    static async userData (req, res, next) {
        const { access_token } = req.headers
        try {
            const user = verifyToken(access_token)
            if (user) {
                res.status(200).json(user)
            } else {
                throw ({ name: "user not found"})
            }
        } catch (err) {
            next (err)
        }
    }
}

module.exports = UserController