const express = require('express');
const router = express.Router();

const ReviewsController = require('../controllers/reviews-controller');
const authorization = require('../middlewares/authorization');

router.post('/', ReviewsController.addNewReview);

router.delete('/', authorization, ReviewsController.deleteReview);

router.get('/:bookId', ReviewsController.getReviewsByBookId);

module.exports = router;
