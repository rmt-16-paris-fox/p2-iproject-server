const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

router.post('/', CourseController.addCourse);
router.get('/', CourseController.getAllCourses);

module.exports = router;