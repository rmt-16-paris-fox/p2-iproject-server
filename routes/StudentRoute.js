const express = require("express");
const StudentController = require("../controllers/StudentController");
const router = express.Router();

router.get("/task", StudentController.getTask);
router.get("/task/:id", StudentController.getDetailTask);
router.post("/assesment/:id", StudentController.assesment);
router.get("/score/:id", StudentController.getScore);

module.exports = router;
