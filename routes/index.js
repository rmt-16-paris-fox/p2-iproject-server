const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middlewares/errorHandler");
const recipe = require("./recipe");
const user = require("./user");

// router.get("/", (req, res) => {
//   res.send("hello worldddd");
// });

router.use("/", user);
router.use("/recipes", recipe);
router.use(errorHandler);

module.exports = router;
