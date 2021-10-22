const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authMiddleware');
const teacherRouter = require('./teacherRouter');
const courseRouter = require('./courseRouter');
const attendenceRouter = require('./attendanceRouter');
const assignmentRouter = require('./assignmentRouter');
const scoreRouter = require('./scoreRouter');
const api = require('../helpers/api');

router.get('/content', (req, res) => {
    api({
        url: '/content_types',
        method: 'GET',
        params: {
            access_token: 'Ftb97dAW6HnHPMmd0i4tuuOKw3Ynr9ulhaIIuu0_uhE'
        }
    })
    .then(({ data }) => {
        res.status(200).json(data.items);
    })
    .catch(err => {
        console.log(err);
    })
})
const data = {
    "fields": {
        "id": {
        "en-US": 1
        },
        "name": {
        "en-US": "Budiman"
        },
        "profilePic": {
        "en-US": "image.com"
        }
    }
}
router.post('/entries', (req, res) => {
    api({
        url: 'entries',
        method: 'POST',
        data: data, 
        headers: {
            'Authorization': 'Bearer CFPAT-6RbCWHbDWNDjUWlcQoG5YxZKZOyTYLg1tdcCO82pBoY',
            'content_type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': 'teacher'  
        }
    })
    .then(({ data }) => {
        console.log(data.items);
    })
    .catch(err => {
        console.log(err);
    })
})

router.use('/teachers', teacherRouter);

router.use(authentication);
router.use('/courses', courseRouter);
router.use('/attendences', attendenceRouter);
router.use('/assignments', assignmentRouter);
router.use('/scores', scoreRouter);

router.use(errorHandler);

module.exports = router;