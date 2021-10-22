const axios = require('axios');
module.exports =  axios.create({
  baseURL: 'https://cdn.contentful.com/spaces/164r73we1y8i/environments/master',
});