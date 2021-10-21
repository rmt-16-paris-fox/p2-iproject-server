require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router/index')
const app = express()
const httpServer = require('https').createServer(app)
const io = require('socket.io')(httpServer)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
io.on('connection', (socket) => {
  console.log("connected");

  socket.on('sendMessage', (data)=>{
    console.log(data)

    socket.broadcast.emit('broadcastMessage', data)
  })

})
httpServer.listen(port, () => {
  console.log(`test di ${port}`);
})


