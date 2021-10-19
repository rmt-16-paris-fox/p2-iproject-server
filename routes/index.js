const Controller = require("../controller/controller.js");
const errorHandler = require("../middlewares/errorHandler.js");
const router = require("express").Router();

router.get("/estate", Controller.getAll);
router.get("/chat", Controller.chat);

router.use(errorHandler);

module.exports = router;
