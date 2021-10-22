const { User, Class, MyClass } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const generatePassword = require("password-generator");
const { OAuth2Client } = require('google-auth-library')
const { signToken } = require('../helpers/jwt')
const { sendingEmailSuccessAdd, verifyEmailAccount } = require('../helpers/nodemailer')
const { Op } = require("sequelize");
const midtransClient = require('midtrans-client');
const fetchVideos = require('../helpers/youtube')
class Controller {
    static async register (req, res) {
        try {
            const {email, name, password} = req.body
            if(!email) throw ({message: "Email is required"})
            if(!password) throw ({message: "Password is required"})
            if(!name) throw ({message: "Name is required"})
            let newUser = await User.create({email, name, password, status: 'non-active', verifyCode: generatePassword(50)})
            await verifyEmailAccount(newUser.email, newUser.name, newUser.verifyCode)
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

    static async verifyAccount (req, res) {
      try {
        let { verifyCode } = req.params
        let verifiedUser = await User.findOne({ where: { verifyCode }})
        if (!verifiedUser) throw ({message: "User not found"})
        await User.update({ status: 'active' }, { where: { id: verifiedUser.id }})
        res.status(200).json({message: 'Account verified'})
      } catch (error) {
      if(error.message == "User not found"){
          res.status(404).json({message: error.message})
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
            if(foundUser.status !== 'active') throw ({message: 'Your Account is not active, please check your email.'})
            const checkPassword = comparePassword(password,foundUser.password)
            if(!checkPassword) throw ({message:"Invalid email/password"})
            let access_token = signToken({name: foundUser.name, id:foundUser.id})
            res.status(200).json({access_token})
        } catch (error) {
          if (error.message == "Invalid email/password" || error.message == "Your Account is not active, please check your email.") {
              res.status(401).json({message: error.message})
          } else if(error.name == "SequelizeValidationError"){
            res.status(400).json({message: error.errors[0].message})
          } else if(error.message) {
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
            status: 'active',
            verifyCode: generatePassword(50)
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
        res.status(500).json({message: "Internal server error"})
      }
    }
    
    static async getClass (req, res) {
        try {
          let offset = 0;
          let limit = 4;
          const { page, title, category } = req.query;
          if (page) offset = page * limit - limit;
          let condition = {}
          if (title) condition.title = { [Op.iLike]: `%${title}%` };
          if (category) condition.category = category;
          let dataClass = await Class.findAndCountAll({
            limit,
            offset,
            where: condition,
            order: [["id", "ASC"]],
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

    static async payment (req, res) {
      try {
        let snap = new midtransClient.Snap({
          isProduction: false,
          serverKey: 'SB-Mid-server-rss-U0U38eOhfGDZoKrt7Mpi'
        });
        let parameter = {
          "transaction_details": {
              "order_id": generatePassword(10),
              "gross_amount": 250000
          },
          "credit_card":{
              "secure" : true
          },
          "customer_details": {
              "email": req.user.email,
              "id": req.user.id
          }
        };
        let transaction = await snap.createTransaction(parameter)
        console.log(transaction);
        res.status(200).json({transaction})
      } catch (error) {
        console.log(error);
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
            if(added) throw ({message: "Anda sudah mempunyai kelas ini."})
            let successAdd = await MyClass.create({UserId: req.user.id, ClassId: classAdd.id, status: "Uncompleted"})
            await sendingEmailSuccessAdd(currentUser.email, currentUser.name, classAdd.title)
            res.status(201).json({id: successAdd.id, ClassId:successAdd.ClassId, UserId: successAdd.UserId, status: successAdd.status})
        } catch (error) {
            if(error.message == "Course not found"){
                res.status(404).json({message: error.message})
            }else if(error.message == "Anda sudah mempunyai kelas ini."){
              res.status(400).json({message: error.message})
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
            res.status(500).json({message: "Internal server error"})
        }
    }

    static async getVideos (req, res) {
      try {
        let {query} = req.params
        const video = await fetchVideos(query)
        res.status(200).json(video)
      } catch (error) {
        res.status(500).json({message: "Internal server error"})
      }
    }
}

module.exports = Controller
