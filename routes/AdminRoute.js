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
router.get("/student", AdminController.getAllStudent);
router.post("/student", AdminController.saveStudent);
router.delete("/student/:id", AdminController.deleteStudent);
router.get("/class", AdminController.getAllClass);
router.post("/class", AdminController.saveClass);
router.delete("/class/:id", AdminController.deleteClass);
router.get("/select_mentor", AdminController.getSelectMentor);
router.get("/select_student/:GradeId", AdminController.getSelectStudent);
router.post("/student_class", AdminController.saveStudentClass);
router.get("/student_class/:id", AdminController.getStudentClass);
router.delete("/student_class/:id", AdminController.deleteStudentClass);
module.exports = router;
