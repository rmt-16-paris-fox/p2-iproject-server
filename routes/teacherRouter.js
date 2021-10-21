const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const TeacherController = require('../controllers/teacherController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.put('/profile', TeacherController.updateProfile);

module.exports = router;