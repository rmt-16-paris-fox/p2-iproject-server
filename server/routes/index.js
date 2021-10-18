const express = require("express");
const KanjiController = require("../controllers/KanjiController");
const router = express.Router();

router.get("/", (req, res) => res.send("running"));

router.get("/kanji/grade/:gradeLevel", KanjiController.getGradeLevel);

module.exports = router;
