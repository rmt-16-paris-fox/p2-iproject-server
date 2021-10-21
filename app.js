if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const express = require ('express')
const app = express ()
const PORT = process.env.PORT || 3000
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const routes = require ('./routes')
const cors = require ('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(routes)

io.on('connection', socket => {
    console.log("user connected")
});

httpServer.listen (PORT, () => {
    console.log("I LOVE U", PORT)
})
