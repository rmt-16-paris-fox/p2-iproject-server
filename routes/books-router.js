const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/books-controller');

const fetchGoogleBookByVolumeId = require('../middlewares/google-books-byId');

router.get('/', BooksController.getAllBooks);

router.get('/:id', fetchGoogleBookByVolumeId, BooksController.getBookById);

router.post('/', fetchGoogleBookByVolumeId, BooksController.addNewBook);

module.exports = router;
