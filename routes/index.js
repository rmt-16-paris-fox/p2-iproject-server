const express = require("express");
const router = express.Router();
const { authN } = require("../middlewares/authN");
const { errorHandler } = require("../middlewares/errorHandler");
const recipe = require("./recipe");
const user = require("./user");

// router.get("/", (req, res) => {
//   res.send("hello worldddd");
// });

router.use("/", user);
router.use(authN);
router.use("/recipes", recipe);
router.use(errorHandler);

module.exports = router;
