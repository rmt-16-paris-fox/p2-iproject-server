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

const { User } = require("./models");

let users = [];

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("log", async (msg) => {
    // socket.emit("get-rooms", rooms);
    try {
      // console.log(msg);
      const foundItem = await User.findOne({
        where: {
          name: msg.name,
        },
      });
      if (!foundItem) {
        // Item not found, create a new one
        const item = await User.create({
          name: msg.name,
          chatLog: JSON.stringify(msg.log),
        });
        return { item, created: true };
      }
      // Found an item, update it
      const item = await User.update(
        { name: msg.name, chatLog: JSON.stringify(msg.log) },
        {
          where: {
            name: msg.name,
          },
        }
      );
      // console.log({ item, created: false });
      return { item, created: false };
    } catch (err) {
      console.log(err);
    }
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

  socket.on("loginUser", async (user) => {
    users.push(user);
    console.log(users);
    try {
      const foundItem = await User.findOne({
        where: {
          name: user,
        },
      });
      io.emit("logMessage", JSON.parse(foundItem.dataValues.chatLog));
    } catch (err) {
      console.log(err);
    }
  });
});

io.engine.on("initial_headers", (headers, req) => {});

server.listen(port, () => console.log("is running on", port));
