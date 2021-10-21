const express = require("express");
const KanjiController = require("../controllers/KanjiController");
const { premiumToken } = require("../helpers/jwt");
const authentication = require("../middlewares/authentication");
const router = express.Router();
const auth = require("./auth");
const { UserData } = require("../models");
const UserController = require("../controllers/UserController");

// test
router.get("/", (req, res) => res.send("running"));

// auth
router.use("/", auth);

router.get("/kanji/grade/:gradeLevel", KanjiController.getGradeLevel);
router.get("/kanji/learn/:count", KanjiController.learnNew);
router.get("/kanji/search", KanjiController.search);
router.get("/kanji/:kanjiName", KanjiController.getKanjiDetails);

router.use(authentication);

router.get("/premium", UserController.checkPremium);

router.post("/premium", (req, res, next) => {
  try {
    const data = req.body.paypal;
    console.log("req.user:", req.user);
    // console.log("=====paypal:", data);
    if (!data) {
      throw { name: "errorPremium" };
    }
    let created = data.create_time.split("T")[0];

    let d = new Date(created);
    let expired = new Date(d.setMonth(d.getMonth() + 1));

    const premium = premiumToken({
      userId: req.user.id,
      email: req.user.email,
      expired,
      createdDate: created,
    });
    //
    UserData.update(
      {
        premiumToken: premium,
      },
      {
        where: {
          UserId: req.user.id,
        },
      }
    );

    res.status(200).json({});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
