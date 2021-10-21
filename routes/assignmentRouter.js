const express = require('express');
const router = express.Router();

router.get('/:studentId', (req, res) => {
    res.send('Get Student Assignment Feature')
});
router.delete('/:id', (req, res) => {
    res.send('Delete Student Assignment Feature')
});


module.exports = router;