const axios = require('axios');

const shortenURL = async (req, res, next) => {
  const { url } = req.body;

  try {
    const { data } = await axios({
      method: 'GET',
      url: `https://api.shrtco.de/v2/shorten?url=${url}`,
    });

    req.body.shortenedURL = data;

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = shortenURL;
