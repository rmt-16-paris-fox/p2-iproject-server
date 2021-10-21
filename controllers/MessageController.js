const app = require("../app");

class MessageController {
  static connection(req, res, next) {
    const { recipeId } = req.params;
    console.log(recipeId, ">>>>>>>>>>>>>>>>>>>>>");

    io.on("connection", (socket) => {
      socket.emit("chat-message", "hellooooo");
    });
  }
}

module.exports = MessageController;
