const axios = require('axios');

class ApiController {

  static async getApiInstagram(req, res, next) {
    axios({
        method: "GET",
        url: "https://www.instagram.com/dagelan/channel/?__a=1"
      })
      .then((responseAxios) => {
        res.status(200).json({
          data: responseAxios.data.graphql.user.edge_owner_to_timeline_media
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static async getPartner(req, res, next) {
    axios({
        method: "GET",
        url: "https://www.instagram.com/dagelan/channel/?__a=1"
      })
      .then((responseAxios) => {
        res.status(200).json({
          data: responseAxios.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static async get9GagApi(req, res, next) {
    axios({
        method: "GET",
        url: "https://m.9gag.com/v1/group-posts"
      })
      .then((responseAxios) => {
        res.status(200).json({
          data: responseAxios.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

}

module.exports = ApiController