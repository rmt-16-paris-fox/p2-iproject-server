const express = require('express');

const HomeController = require('../controllers/home-controller');
const UsersController = require('../controllers/users-controller');
const GoogleBooksController = require('../controllers/google-books-controller');

const errorHandler = require('../middlewares/error-handler');
const authentication = require('../middlewares/authentication');
const fetchGoogleBooks = require('../middlewares/google-books');

const router = express.Router();
const books = require('./books-router');
const reviews = require('./reviews-router');

router.get('/', HomeController.loadHome);

router.post('/register', UsersController.register);

router.post('/login', UsersController.login);

router.post('/google-books', fetchGoogleBooks, GoogleBooksController.fetchBooks);

router.use('/books', books);

router.use(authentication);

router.use('/reviews', reviews);

router.use(errorHandler);

module.exports = router;
