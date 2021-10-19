const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const authentication = require('./middleware/authentication')
const Controller = require("./controllers/controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', Controller.register)
  
app.post('/login', Controller.login)
  
  //authC
app.use(authentication)
  
app.get('/class', Controller.getClass)
  
app.post('/myclass/:classId', Controller.addClass)
  
// app.get('/myclass', async (req, res) => {
// try {
//     const myCourse = await MyCourse.findAll({
//         where: {UserId: +req.user.id}, 
//         attributes: {
//             exclude: ['createdAt', 'updatedAt']
//         },
//         include: {
//             model: Course,
//             attributes: {
//                 exclude: ['id','createdAt', 'updatedAt']
//             }
//         } 
//         })
//         res.status(200).json(myCourse)
// } catch (error) {
//     res.status(500).json({message: "Internal server error"})
// }
// })
  
//   //authZ
  
//   app.patch('/mycourses/:id', authorization, async (req, res) => {
//       try {
//           let courseId = req.params.id
//           await MyCourse.update({status: "Completed"},
//               { where: 
//                   {
//                       CourseId: courseId,
//                       UserId: req.user.id
//                   }
//               }
//           ) 
//           res.status(200).json({message: "Course has been completed"})
//       } catch (error) {
//           console.log(error.name);
//           res.status(500).json({message: "Internal server error"})
//       }
//   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});