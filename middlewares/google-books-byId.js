const axios = require('axios');

const fetchGoogleBookByVolumeId = async (req, res, next) => {
  try {
    const { volumeId } = req.body;

    const { data } = await axios({
      method: 'GET',
      url: `${process.env.GOOGLE_BOOKS_BASEURL}/volumes/${volumeId}`,
      params: {},
    });

    req.body.book = data;

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = fetchGoogleBookByVolumeId;
