require("dotenv").config();
const express = require("express");
const { createServer } = require("http");

const port = process.env.PORT || 3000;

const app = express();
const cors = require("cors");
const router = require("./routes");

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    socket.emit("get-rooms", rooms);
  });

  socket.on("newMessage", (msg) => {
    io.emit("send message", { message: msg, user: socket.username });
  });

  socket.on("new user", (usr) => {
    socket.username = usr;
    console.log("User connected - Username: " + socket.username);
  });
});

io.engine.on("initial_headers", (headers, req) => {});

server.listen(port, () => console.log("is running on", port));
