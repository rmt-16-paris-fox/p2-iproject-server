const express = require('express');
const router = express.Router();

router.get('/:studentId/:courseId', (req, res) => {
    console.log(req.params);
    res.send('Get Student Attendance Feature')
});
router.post('/:studentId/:courseId', (req, res) => {
    res.send('Create Student Attendance Feature')
});
router.put('/:studentId/:courseId', (req, res) => {
    res.send('Update Student Attendance Feature')
});

module.exports = router;