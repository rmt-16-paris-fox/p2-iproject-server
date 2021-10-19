const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const authentication = require('./middleware/authentication')
const authorization = require('./middleware/authorization')
const Controller = require("./controllers/controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', Controller.register)
  
app.post('/login', Controller.login)
  
app.use(authentication)
  
app.get('/class', Controller.getClass)
  
app.post('/myclass/:classId', Controller.addClass)
  
app.get('/myclass', Controller.getMyClass)
  
app.patch('/myclass/:id', authorization, Controller.updateStatus)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});