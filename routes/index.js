const express = require("express");
const router = express.Router();
const { authN } = require("..//middlewares/authN");
const recipe = require("./recipe");

// router.get("/", (req, res) => {
//   res.send("hello worldddd");
// });

router.use("/recipes", recipe);

module.exports = router;
