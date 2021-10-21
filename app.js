// require("dotenv").config(); // set environment variable

const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const KanjiController = require("./controllers/KanjiController");
const listener = require("./apis/socketIoListener");
const io = new Server(server, { cors: { origin: "*" } });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app routes
app.use("/", routes);

// error handling
app.use(errorHandler);

io.on("connection", listener);
//     (socket) => {
//   console.log("a user connected");
//   socket.on("test", (msg) => {
//     console.log("message: " + msg);
//     socket.emit("test", "test is success (server)");
//   });

//   socket.on("initStartTest", (data) => {
//     console.log("initStartTest() detected");
//   });

//   socket.on("testStart", async (data) => {
//     // console.log("initStartTest() detected");
//     try {
//       // setTimeout(() => {

//       // }, 10000); // 10 sec per question
//       const result = await KanjiController.getQuestion();
//       socket.emit("test_data", result);

//       //   let timer = 5;
//       //   let t = new Date();
//       //   while (timer) {
//       //     if (Date.now() - t >= 1) {
//       //       t = Date.now();
//       //       timer--;
//       //     }
//       //   }
//     } catch (err) {
//       console.log("testStart socket error:", err);
//     }
//   });
// });

module.exports = server;
