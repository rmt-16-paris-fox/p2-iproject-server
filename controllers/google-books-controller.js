class GoogleBooksController {
  static async fetchBooks(req, res, next) {
    try {
      const { books } = req.body;

      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  }

  static async fetchBookByVolumeId(req, res, next) {
    try {
      const { book } = req.body;

      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GoogleBooksController;
