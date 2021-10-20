const { Review } = require('../models/index');

const authorization = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const { reviewId } = req.body;

    const foundReview = await Review.findOne({
      where: {
        id: reviewId,
      },
    });

    if (!foundReview) {
      throw { name: 'notFound' };
    }

    if (!access_token) {
      throw { name: 'notLoggedIn' };
    }

    if (foundReview.userId !== req.user.id) {
      throw { name: 'reviewUnauthorized' };
    }

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = authorization;
