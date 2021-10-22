const router = require("express").Router();
const userRoute = require("./userRoute");
const gameRoute = require("./gameRoute");
const errorHandler = require("../middlewares/errorHandler");

router.use("/users", userRoute);
router.use("/games", gameRoute);
router.use(errorHandler);

module.exports = router;
