
const {User} = require('../models')
const {compare}= require ('../helpers/bcrypt')
const {createToken} =require ('../helpers/jwt')
const sendingEmail = require ('../helpers/nodemailer')
class UserController {
    static async registration(req, res, next) {
        try {
          
          const { username, email, password, address } = req.body;
          const response = await User.create({ username, email, password, address });
          // sendingEmail(response.email, response.username)
          res.status(201).json({ username: response.username, email: response.email, address:response.address});
    
          if (!response) {
            throw { name: "RegisterNotFound" };
          }
        } catch (err) {
          // if (err.name == "RegisterNotFound") {
          //     res.status(400).json({message:'registrasi gagal'})
    
          // }
          // else{
          //     res.status(500).json({
          //       message:'internal error'
          //     })
          // }
          next(err)
        }
      }
      static async login(req, res, next) {
        console.log("masuk");
        const { email, password } = req.body;
        // console.log(req.body);
        try {
          const response = await User.findOne({
            where: { email },
          });
          
          // console.log(response);
          if (!response) {
            throw { name: "Invalid email or password" };
          } else {
            const user = compare(password, response.password);
            if (!user) {
              throw { name: "invalid email/password" };
            } else {
              const access_token = createToken({
                id: response.id,
                email: response.email,
               
              });
              // console.log(access_token);
              sendingEmail(response.email, response.username)
              res.status(200).json({ access_token });
            }
          }
        } catch (err) {
          // console.log(err);
          // if (err.name== "Invalid email or password" ) {
          //   res.status(401).json({ message: "email or password invalid" });
          // }
          // if (err.name== "Invalid email/password" ) {
          //   res.status(401).json({ message: "email or password invalid" });
          // }else{
          //   res.status(500).json(err);
          // }

          next(err)
        }
      }

}
module.exports = UserController