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

  static async celebBirth(req, res, next) {
    axios({
        method: "GET",
        url: "https://celebrity-bucks.p.rapidapi.com/birthdays/JSON",
        headers: {
          'x-rapidapi-host': 'celebrity-bucks.p.rapidapi.com',
          'x-rapidapi-key': 'b9b377e38fmsh272a131ff010704p198a73jsnad7035ccd9d6'
        }
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

  static async celebPrice(req, res, next) {
    axios({
        method: "GET",
        url: "https://celebrity-bucks.p.rapidapi.com/export/JSON",
        headers: {
          'x-rapidapi-host': 'celebrity-bucks.p.rapidapi.com',
          'x-rapidapi-key': 'b9b377e38fmsh272a131ff010704p198a73jsnad7035ccd9d6'
        }
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

  static async memeGenerator(req, res, next) {
    axios({
        method: "GET",
        url: "https://meme-api.herokuapp.com/gimme/40",
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