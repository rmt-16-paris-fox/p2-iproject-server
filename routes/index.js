const express = require('express');

const HomeController = require('../controllers/home-controller');
const UsersController = require('../controllers/users-controller');
const GoogleBooksController = require('../controllers/google-books-controller');

const errorHandler = require('../middlewares/error-handler');
const authentication = require('../middlewares/authentication');
const fetchGoogleBooks = require('../middlewares/google-books');

const router = express.Router();

router.get('/', HomeController.loadHome);

router.post('/register', UsersController.register);

router.post('/login', UsersController.login);

router.get('/google-books', fetchGoogleBooks, GoogleBooksController.fetchBooks);

router.use(errorHandler);

module.exports = router;
