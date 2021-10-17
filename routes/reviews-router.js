const express = require('express');
const router = express.Router();

const ReviewsController = require('../controllers/reviews-controller');

router.post('/', ReviewsController.addNewReview);

router.get('/:bookId', ReviewsController.getReviewsByBookId);

module.exports = router;
