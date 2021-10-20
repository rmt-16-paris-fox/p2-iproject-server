const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/books-controller');

const fetchGoogleBookByVolumeId = require('../middlewares/google-books-byId');

router.get('/', BooksController.getAllBooks);

// find book by googleBooksId
router.post(
  '/:volumeId',
  fetchGoogleBookByVolumeId,
  BooksController.getBookById
);

// add new book
router.post('/', fetchGoogleBookByVolumeId, BooksController.addNewBook);

module.exports = router;
