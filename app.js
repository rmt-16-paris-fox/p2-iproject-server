require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.port
const routes = require('./routes')

app.use(cors())

//body parser or middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(routes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})