const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authMiddleware');
const teacherRouter = require('./teacherRouter');
const courseRouter = require('./courseRouter');
const attendenceRouter = require('./attendanceRouter');
const assignmentRouter = require('./assignmentRouter');
const scoreRouter = require('./scoreRouter');

router.use('/teachers', teacherRouter);

router.use(authentication);
router.use('/courses', courseRouter);
router.use('/attendences', attendenceRouter);
router.use('/assignments', assignmentRouter);
router.use('/scores', scoreRouter);

router.use(errorHandler);

module.exports = router;