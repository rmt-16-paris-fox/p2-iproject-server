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

let users = [];

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("disconnect", () => {
    // socket.emit("get-rooms", rooms);
  });

  socket.on("newMessage", (msg) => {
    // console.log(msg);
    io.emit("sendMessage", {
      message: msg,
      user: socket.username,
      id: socket.id,
    });
  });

  socket.on("new user", (usr) => {
    socket.username = usr;
    console.log("User connected - Username: " + socket.username);
  });

  socket.on("loginUser", (user) => {
    users.push(user);
    console.log(users);
  });
});

io.engine.on("initial_headers", (headers, req) => {});

server.listen(port, () => console.log("is running on", port));
