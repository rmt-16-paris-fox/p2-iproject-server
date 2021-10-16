class GoogleBooksController {
  static async fetchBooks(req, res, next) {
    try {
      const { books } = req.body;
      const booksData = [];

      for (const book of books) {
        booksData.push({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
        });
      }

      res.status(200).json(booksData);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GoogleBooksController;
