const express = require("express");
const AdminController = require("../controllers/AdminController");

const { admin } = require("../middlewares/authorization");

const router = express.Router();

router.use(admin);
router.get("/mentor", AdminController.getAllMentor);
router.post("/mentor", AdminController.saveMentor);
router.delete("/mentor/:id", AdminController.deleteMentor);
router.get("/mentor/:id", AdminController.detailMentor);
router.put("/mentor/:id", AdminController.updateMentor);
router.post("/student", AdminController.saveStudent);

module.exports = router;
