const { Book, Review, User } = require('../models/index');
const { Op } = require('sequelize');

const { getPagination, getPagingData } = require('../helpers/pagination');

class BooksController {
  static async addNewBook(req, res, next) {
    try {
      const { book } = req.body;
      let bookDescription;

      const bookAuthors = book.volumeInfo.authors.join(', ');

      const response = await Book.create({
        googleBooksId: book.id,
        title: book.volumeInfo.title,
        author: bookAuthors,
        imgUrl: book.volumeInfo.imageLinks.thumbnail,
      });

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getBookById(req, res, next) {
    try {
      const { id } = req.params;
      const { book } = req.body;

      const foundBook = await Book.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: Review,
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ],
          },
        ],
      });

      res
        .status(200)
        .json({ foundBook, description: book.volumeInfo.description });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getAllBooks(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = getPagination(page, size);

      let option = {
        where: {},
        include: [{ model: Review }],
        limit,
        offset,
      };

      if (req.query.title) {
        option.where['title'] = {
          [Op.iLike]: `%${req.query.title}%`,
        };
      }

      console.log(option);

      const books = await Book.findAndCountAll(option);

      const booksWithPagination = getPagingData(books, page, limit);

      res.status(200).json(booksWithPagination);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = BooksController;
