const KanjiAlive = require("../apis/kanjiAlive");
const { Progress, SavedKanji } = require("../models");

function isASCII(str) {
  return /^[\x00-\x7F]*$/.test(str);
}

// function dd(choices, kanjis) {
//   const results = [];
//   for (let i of choices) {
//     setTimeout(async () => {
//       console.log("kanji:", kanjis[i]);
//       const k = await KanjiAlive.details(encodeURIComponent(kanjis[i]));
//       // console.log("k:", k);
//       const c = {
//         on: k.kanji.onyomi.katakana,
//         kun: k.kanji.kunyomi.hiragana,
//       };
//       results.push(c);
//     }, 0);
//   }

// }

class KanjiController {
  static async getGradeLevel(req, res, next) {
    try {
      const result = await KanjiAlive.gradeLevel(req.params.gradeLevel);
      //   console.log("kanji result:", result);
      console.log("fetching data grade level:", req.params.gradeLevel);
      console.log("result:", result.length);
      res.status(200).json(result);
    } catch (err) {
      console.log("error:", err);
      next(err);
    }
  }

  static async getKanjiDetails(req, res, next) {
    try {
      const kanji = req.params.kanjiName;
      console.log("kanji details of:", kanji);
      const result = await KanjiAlive.details(encodeURIComponent(kanji));

      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }

  static async search(req, res, next) {
    try {
      let search = req.query.value;
      let result;
      if (search) {
        console.log("search value:", search);
        if (!isASCII(search)) search = encodeURIComponent(search);

        result = await KanjiAlive.search(search);
      }

      console.log("search result:", result);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async learnNew(req, res, next) {
    try {
      // let count = req.params.count;
      let count = 10;
      const result = await Progress.findOne({ where: { UserId: req.user.id } });
      const grade = result.gradeLevel;

      // to get kanji by count, that not added yet to current user kanji
      // the way kanji retrieved is random in particular grade level
      const newKanji = [];
      while (count) {
        newKanji.push(result.kanji.character);
        count--;
      }

      res.status(200).json(newKanji);
    } catch (err) {
      next(err);
    }
  }

  static async getQuestion(g, count) {
    const grade = g;
    let qNumber = count;

    const testData = {
      question: "",
      choices: [],
      number: qNumber,
    };

    const result = await KanjiAlive.gradeLevel(grade);
    const kanjis = result.map((k) => {
      return k.kanji.character;
    });
    // pick random kanji
    let q = Math.floor(Math.random() * kanjis.length);
    testData.question = kanjis[q];

    // generate 5 random wrong choice
    let choices = [];
    for (let i = 0; i < 6; i++) {
      let r = Math.floor(Math.random() * kanjis.length);
      while (choices.includes(r)) {
        // find another random kanji if its already choosed
        r = Math.floor(Math.random() * kanjis.length);
      }
      console.log("r:", r);
      choices.push(r);
    }
    // if right answer not inserted, insert it to random index of choice
    let ans;
    if (!choices.includes(q)) {
      ans = Math.floor(Math.random() * 6);
      choices[ans] = q;
      console.log("q including:", q, ans);
      console.log("choices[ans]:", choices[ans]);
    }

    // try somthing

    // reduce request time
    const promises = [];
    for (let n = 0; n < 6; n++) {
      let i = choices[n];
      promises.push(KanjiAlive.details(encodeURIComponent(kanjis[i])));
    }

    const results = await Promise.all(promises);
    console.log("results:", results);
    for (const k of results) {
      const c = {
        on: k.kanji.onyomi.katakana,
        kun: k.kanji.kunyomi.hiragana,
      };
      testData.choices.push(c);
    }

    return { testData, answer: ans };
  }

  // ================== take a kanji test

  // generate question for find kanji
  static async generateTwo(g, count) {
    console.log("call generateTwo()");
    const grade = g;
    // const count = q;

    const testData = {
      question: "",
      choices: [],
    };

    const result = await KanjiAlive.gradeLevel(grade);
    const kanjis = result.map((k) => {
      return k.kanji.character;
    });
    // pick random kanji for question
    let q = Math.floor(Math.random() * kanjis.length);
    const k = await KanjiAlive.details(encodeURIComponent(kanjis[q]));
    testData.question = {
      on: k.kanji.onyomi.katakana,
      kun: k.kanji.kunyomi.hiragana,
    };

    // generate 6 random choice
    let choices = [];
    for (let i = 0; i < 6; i++) {
      let r = Math.floor(Math.random() * kanjis.length);
      while (choices.includes(r)) {
        // find another random kanji if its already choosed
        r = Math.floor(Math.random() * kanjis.length);
      }
      choices.push(r);
    }
    // if right answer not inserted, insert it to random index of choice
    let ans;
    if (!choices.includes(q)) {
      ans = Math.floor(Math.random() * 6);
      choices[ans] = q;
    }

    testData.choices = choices.map((idx) => {
      return kanjis[idx];
    });
    return { testData, answer: ans };
  }
}

module.exports = KanjiController;

/**
 * TODO:
 *
 * create new table:
 * Progress:
 *  Gradelevel
 *
 */
