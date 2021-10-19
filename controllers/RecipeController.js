const axios = require("axios");

class RecipeController {
  static async getAllRecipes(req, res, next) {
    try {
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;
      const { name, calories } = req.body;

      if (!name) {
        throw { name: "recipeNameEmpty" };
      }

      const field = "field=uri&field=label&field=image&field=yield&field=dietLabels&field=ingredientLines&field=calories&field=totalWeight&field=totalTime&field=cuisineType&field=mealType";

      const result = await axios({
        url: `https://api.edamam.com/api/recipes/v2?${field}`,
        params: {
          app_id,
          app_key,
          type: "public",
          q: name,
          calories: calories || null,
        },
      });
      res.status(200).json(result.data);
    } catch (err) {
      next(err);
    }
  }

  static async getRecipeDetail(req, res, next) {
    try {
      const RecipeId = req.params.recipeId;
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;

      const found = await axios({
        url: `https://api.edamam.com/api/recipes/v2/${RecipeId || null}`,
        params: {
          app_id,
          app_key,
          type: "public",
        },
      });

      const recipe = found.data.recipe;
      res.status(200).json(recipe);
    } catch (err) {
      next(err);
    }
  }

  static async postMyRecipe(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecipeController;
