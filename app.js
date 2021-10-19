const express = require('express')
const port = 3000
const cors = require('cors')
const router = require('./router/index')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)
app.listen(port, ()=>{
  console.log(`lagi lari larian di`, port)
})