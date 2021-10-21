const axios = require("axios");

const request = axios.create({
  baseURL: "https://kanjialive-api.p.rapidapi.com/api/public",
  headers: {
    "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
    "x-rapidapi-key": process.env.KANJIALIVE_KEY,
  },
});

function printError(err) {
  console.log(`[KanjiAlive error]: ${err}`);
}

class KanjiAlive {
  // @param grade - should be integer 1-6
  static async gradeLevel(grade) {
    try {
      const result = await request({
        url: "/search/advanced",
        params: {
          grade,
        },
      });

      return result.data;
    } catch (err) {
      printError("error");
      throw err;
    }
  }

  // get single kanji details information
  // @params kanji -
  static async details(kanji) {
    // console.log("[kanjiAlive]: details()");
    try {
      const result = await request({
        url: `/kanji/${kanji}`,
      });

      return result.data;
    } catch (err) {
      printError("error");
      throw err;
    }
  }

  // call a basic search
  // @params value - search value
  static async search(value) {
    try {
      const result = await request({
        url: `/search/${value}`,
      });

      return result.data;
    } catch (err) {
      printError("error");
      throw err;
    }
  }
}

module.exports = KanjiAlive;
