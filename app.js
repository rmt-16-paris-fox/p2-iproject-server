require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ControllerUser = require('./controllers/controllerUser')
const authentication = require('./middlewares/authentication')
const errorHandlers = require('./middlewares/errorHandlers')
const app = express()
const port = process.env.PORT||3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/register', ControllerUser.register)
app.post('/login', ControllerUser.login)

app.use(authentication)
app.get('/products', ControllerUser.getAllProducts)
app.post('/product', ControllerUser.AddNewProducts)
app.delete('/products/:productsId', ControllerUser.deleteProducts)






app.use(errorHandlers)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})