const { Review, Book } = require('../models/index');

class ReviewsController {
  static async addNewReview(req, res, next) {
    try {
      const { rating, content, bookId } = req.body;

      const foundReview = await Review.findOne({
        where: {
          bookId,
          userId: req.user.id,
        },
      });

      if (foundReview) {
        throw { name: 'alreadyReviewed' };
      }

      const response = await Review.create({
        rating,
        content,
        userId: req.user.id,
        bookId,
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getReviewsByBookId(req, res, next) {
    try {
      const { bookId } = req.params;

      const foundReviews = await Review.findAll({
        where: {
          bookId: bookId,
        },
        include: [
          {
            model: Book,
          },
        ],
      });

      res.status(200).json(foundReviews);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ReviewsController;
