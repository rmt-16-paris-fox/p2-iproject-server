//sequelize model:generate --name User --attributes username:string,email:string,password:string,phoneNumber:string,address:string
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(port, () => {
  console.log(` running on ${port}`);
});