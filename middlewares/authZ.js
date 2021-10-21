const { MyRecipe } = require("../models");

const authZ = async (req, res, next) => {
  try {
    const { id } = req.user;
    const recipeId = req.params.id;
    console.log(recipeId, ">>>>>>>helow");

    const result = await MyRecipe.findOne({
      where: { id: Number(recipeId) },
    });

    if (!result) {
      throw { name: "recipeNotFound" };
    }

    if (result.UserId !== id) {
      throw { name: "forbidden" };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authZ };
