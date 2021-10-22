require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
const cors = require("cors");
const router = require("./routes");

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const { User } = require("./models");

let users = [];

io.on("connection", (socket) => {
  // console.log("user connected", socket.id);

  socket.on("loginUser", async (user) => {
    try {
      const [userFound, created] = await User.findOrCreate({
        where: {
          name: user,
        },
        defaults: {
          role: user === "Colin" ? "admin" : "customer",
        },
      });

      let id = userFound.dataValues.id;

      socket.join(id);

      users.push({
        name: userFound.dataValues.name,
        id: id,
      });

      io.to(id).emit("sendMessage", {
        message: { message: user + " is logged in", name: user },
        user: socket.username,
        id: socket.id,
      });

      // io.to(id).emit("logMessage", JSON.parse(userFound.dataValues.chatLog));
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("log", async (msg) => {
    try {
      // Found an item, update it
      const item = await User.update(
        { name: msg.name, chatLog: JSON.stringify(msg.log) },
        {
          where: {
            name: msg.name,
          },
        }
      );
      return { item, created: false };
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("newMessage", (msg) => {
    // console.log(msg);
    // if(msg.name !== 'Colin') {

    // }
    // else{

    // }
    io.emit("sendMessage", {
      message: msg,
      user: socket.username,
      id: socket.id,
    });
  });
});

httpServer.listen(port, () => console.log("is running on", port));
