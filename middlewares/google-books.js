const axios = require('axios');

const fetchGoogleBooks = async (req, res, next) => {
  try {
    const { inTitle, inAuthor } = req.body;

    const { data } = await axios({
      method: 'GET',
      url: `${process.env.GOOGLE_BOOKS_BASEURL}/volumes`,
      params: {
        q: `${inTitle}+inauthor:${inAuthor}`,
        fields:
          'totalItems,items(id,volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks/thumbnail)',
        orderBy: 'relevance',
      },
    });

    req.body.books = data;

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = fetchGoogleBooks;
