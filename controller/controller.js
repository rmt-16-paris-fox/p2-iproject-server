const axios = require("axios");

class Controller {
  static async getAll(req, res, next) {
    try {
      let { city, state_code } = req.query;
      console.log(city, state_code);
      let result = await axios({
        method: "GET",
        url: "https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale",
        params: {
          city,
          state_code,
          offset: "0",
          limit: "50",
          sort: "relevance",
        },
        headers: {
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
          "x-rapidapi-key":
            "8c1a98ca86msh414575b59aef520p1d0266jsnbb0eda989a48",
        },
      });
      // console.log(result.data);
      res.status(200).json(result.data);
    } catch (err) {
      next(err);
    }
  }
  static async chat(req, res, next) {
    res.send("<h1>hello</h1>");
    // res.status(200).json({ message: "connected" });
  }
  static async getCity(req, res, next) {
    try {
      let { state_code } = req.query;
      let result = await axios({
        method: "GET",
        url: "https://realty-in-us.p.rapidapi.com/locations/auto-complete",
        params: { input: state_code },
        headers: {
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
          "x-rapidapi-key":
            "8c1a98ca86msh414575b59aef520p1d0266jsnbb0eda989a48",
        },
      });

      let cities = [];
      result.data.autocomplete.forEach((el) => {
        cities.push(el.city);
      });
      res.status(200).json(cities);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
