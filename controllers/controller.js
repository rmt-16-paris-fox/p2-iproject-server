const { User, Class, MyClass } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const generatePassword = require("password-generator");
const { OAuth2Client } = require('google-auth-library')
const { signToken } = require('../helpers/jwt')
const sendingEmail = require('../helpers/nodemailer')
class Controller {
    static async register (req, res) {
        try {
            const {email, name, password} = req.body
            if(!email) throw ({message: "Email is required"})
            if(!password) throw ({message: "Password is required"})
            if(!name) throw ({message: "Name is required"})
            let newUser = await User.create({email: email, name: name, password: password})
            res.status(201).json({id: newUser.id, name: newUser.name, email: newUser.email})
        } catch (error) {
            if(error.name == "SequelizeUniqueConstraintError"){
                res.status(400).json({message: error.errors[0].message})
              } else if(error.message){
                res.status(400).json({message: error.message})
            } else {
              res.status(500).json({message: "Internal server error"})
            }
        }
    }

    static async login (req, res) {
        try {
            const {email, password} = req.body
            if(!email) throw ({message: "Email is required"})
            if(!password) throw ({message: "Password is required"})
            const foundUser = await User.findOne({where: {email}})
            if(!foundUser) throw ({message:"Invalid email/password"})
            const checkPassword = comparePassword(password,foundUser.password)
            if(!checkPassword) throw ({message:"Invalid email/password"})
            let access_token = signToken({name: foundUser.name, id:foundUser.id})
            res.status(200).json({access_token})
        } catch (error) {
          if (error.message == "Invalid email/password") {
              res.status(401).json({message: error.message})
          }
          else if(error.message) {
            res.status(400).json({message: error.message})
          } else {
              res.status(500).json({message: "Internal server error"})
          }
        }
    }

    static async googleLogin(req, res, next) {
      try {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const emailFromGoogle = payload.email;
        const [user, isCreated] = await User.findOrCreate({
          where: {
            email: emailFromGoogle,
          },
          defaults: {
            password: generatePassword(),
            name: payload.name,
            email: emailFromGoogle,
          },
        });
        const tokenFromServer = signToken({
          id: user.id,
          email: user.email,
          name: user.name,
        });
        if (isCreated == true) {
          res.status(201).json({
            id: user.id,
            email: user.email,
            name: user.name,
            access_token: tokenFromServer,
          });
        } else {
          res
            .status(200)
            .json({ access_token: tokenFromServer });
        }
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
    
    static async getClass (req, res) {
        try {
            let dataClass = await Class.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                }
            })
            res.status(200).json(dataClass)
        } catch (error) {
          res.status(500).json({message: "Internal server error"})
        }
      }

    static async getClassById (req, res) {
        try {
            const {id} = req.params
            let dataClass = await Class.findByPk(id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                }
            })
            res.status(200).json(dataClass)
        } catch (error) {
          res.status(500).json({message: "Internal server error"})
        }
      }

    static async addClass (req, res) {
        try {
            const {classId} = req.params
            let classAdd = await Class.findByPk(classId)
            let currentUser = await User.findByPk(req.user.id)
            if(!classAdd) throw ({message:"Class not found"})
            let added = await MyClass.findOne({where: {
                UserId: req.user.id, ClassId: classId
            }})
            if(added) throw ({message: "Has Been Added"})
            let successAdd = await MyClass.create({UserId: req.user.id, ClassId: classAdd.id, status: "Uncompleted"})
            await sendingEmail(currentUser.email, currentUser.name, classAdd.title)
            res.status(201).json({id: successAdd.id, ClassId:successAdd.ClassId, UserId: successAdd.UserId, status: successAdd.status})
        } catch (error) {
            if(error.message == "Course not found"){
                res.status(404).json({message: error.message})
            }else if(error.message == "Has Been Added"){
              res.status(404).json({message: error.message})
          } else {
                res.status(500).json({message: "Internal server error"})
            }
        }
    }  

    static async getMyClass (req, res) {
        try {
            const myClass = await MyClass.findAll({
                where: {UserId: +req.user.id}, 
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: {
                    model: Class,
                    attributes: {
                        exclude: ['id','createdAt', 'updatedAt']
                    }
                } 
                })
                res.status(200).json(myClass)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }

    static async updateStatus (req, res) {
        try {
            let classId = req.params.id
            await MyClass.update({status: "Finished"},
                { where: 
                    {
                        ClassId: classId,
                        UserId: req.user.id
                    }
                }
            ) 
            res.status(200).json({message: "Class has been finished"})
        } catch (error) {
            console.log(error.name);
            res.status(500).json({message: "Internal server error"})
        }
    }
}

module.exports = Controller
