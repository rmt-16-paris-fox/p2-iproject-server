const express = require('express');
const router = express.Router();

router.post('/:studentId/:courseId', (req, res) => {
  res.send('Create Student Score Feature')
});
router.get('/:studentId/:courseId', (req, res) => {
  res.send('Get Student Score Feature')
});
router.put('/:studentId/:courseId', (req, res) => {
  res.send('Update Student ScoreFeature')
});
router.delete('/:studentId/:courseId', (req, res) => {
  res.send('Delete Student Score Feature')
});

module.exports = router;