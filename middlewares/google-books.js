const axios = require('axios');

const fetchGoogleBooks = async (req, res, next) => {
  try {
    const { inTitle, inAuthor } = req.body;

    const { data } = await axios({
      method: 'GET',
      url: `${process.env.GOOGLE_BOOKS_BASEURL}/volumes`,
      params: {
        q: `${inTitle}+inauthor:${inAuthor}`,
      },
    });

    req.body.books = data.items;

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = fetchGoogleBooks;
