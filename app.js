if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const cors = require("cors");
const authentication = require('./middleware/authentication')
const authorization = require('./middleware/authorization')
const Controller = require("./controllers/controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', Controller.register)
  
app.post('/login', Controller.login)

app.post('/login-google', Controller.googleLogin)
  
app.get('/class', Controller.getClass)

app.get('/class/:id', Controller.getClassById)

app.use(authentication)
  
app.post('/myclass/:classId', Controller.addClass)
  
app.get('/myclass', Controller.getMyClass)
  
app.patch('/myclass/:id', authorization, Controller.updateStatus)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});