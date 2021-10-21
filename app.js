
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.listen(port, () => {
  console.log(` running on ${port}`);
});

//sequelize model:generate --name User --attributes username:string,email:string,password:string,phoneNumber:string,address:string
// sequelize model:generate --name Plant --attributes name:string,category:string,description:string,price:integer
//sequelize seed:generate --name User
//sequelize migration:generate name add-fk-to-plant