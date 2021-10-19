require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = process.env.PORT || 3000;

const app = express();
const cors = require("cors");
const router = require("./routes");
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(port, () => console.log("is running on", port));
