const KanjiController = require("../controllers/KanjiController");
const KanjiAlive = require("./kanjiAlive");

const Test = {
  onGoing: false,
  question: [],
  grade: null,
  count: null,
  ready: false,
};

/**
 *
 *
 */

function listener(socket) {
  console.log("a user connected");

  socket.clientData = {
    testData: {},
    answer: null,
  };
  socket.on("test", (msg) => {
    console.log("message: " + msg);
    socket.emit("test", "test is success (server)");
  });

  socket.on("testStart", async (data) => {
    try {
      const grade = data.grade;
      let result;
      if (data.type === 2) {
        result = await KanjiController.getQuestion(grade);
      } else {
        result = await KanjiController.generateTwo(grade);
      }
      socket.emit("test_data", result.testData);

      socket.clientData.testData = result;
    } catch (err) {
      console.log("testStart socket error:", err);
    }
  });

  socket.on("testAnswer", (data) => {
    let prevQ = "incorrect";
    if (socket.clientData.testData.answer === data.answer) {
      prevQ = "correct";
    }
    socket.emit("test_answer", prevQ);
    socket.emit("test_answer_value", data.answer);
  });

  socket.on("testNext", async (data) => {
    try {
      const grade = data.grade;
      let result;
      if (data.type === 2) {
        result = await KanjiController.getQuestion(grade);
      } else {
        result = await KanjiController.generateTwo(grade);
      }
      socket.emit("test_data", result.testData);

      socket.clientData.testData = result;
    } catch (err) {
      console.log("testNext socket error:", err);
    }
  });
}

module.exports = listener;
