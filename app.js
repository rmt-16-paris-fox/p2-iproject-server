require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: {} });
const PORT = process.env.PORT || 3000;
const routes = require("./routes");

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

server.listen(PORT, () => {
  console.log("listening to:", PORT);
});

io.on("connection", (socket) => {
  socket.on("JOIN_ROOM", (room, name) => {
    socket.join(room);
    io.to(room).emit("JOINED_MESSAGE", name);
  });
  socket.on("SEND_MESSAGE", (room, data) => {
    // socket.emit("MESSAGE", data);
    io.to(room).emit("MESSAGE", data);
    console.log(room);
  });
});
