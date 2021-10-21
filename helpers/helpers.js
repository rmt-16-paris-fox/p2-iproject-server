const { UserData, User } = require("../models");
const { verifyPermium } = require("../helpers/jwt");

async function checkPremium(id) {
  try {
    // const id = id;
    let isPremium = true;

    const result = await UserData.findOne({
      where: {
        UserId: id,
      },
    });

    const premiumToken = result.premiumToken;
    if (premiumToken === "") {
      return false;
    }
    const payload = verifyPermium(premiumToken);
    const user = await User.findOne({
      where: {
        id: payload.userId,
        email: payload.email,
      },
    });
    if (!user) throw { name: "invalidPremiumToken" };

    const now = new Date().toISOString().split("T")[0];
    if (now > payload.expired) {
      await UserData.update({
        premiumToken: "",
      });
      isPremium = false;
    }

    return isPremium;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  checkPremium,
};
