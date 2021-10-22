const express = require("express");
const MentorController = require("../controllers/MentorController");
const router = express.Router();

router.get("/", MentorController.getClass);
router.get("/student/:id", MentorController.getStudent);
router.post("/task", MentorController.saveTask);
router.get("/task/:id", MentorController.getTask);
module.exports = router;
