const axios = require("axios");
const { User, MyRecipe, RateRecipe } = require("../models");

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

      const foundRecipeId = found.data.recipe.uri.split("#")[1];
      const UserId = Number(req.user.id);

      const foundMyRecipe = await MyRecipe.findOne({
        where: {
          UserId,
          RecipeId: foundRecipeId,
        },
      });

      if (foundMyRecipe) {
        throw { name: "alreadyMyRecipe" };
      }

      const result = await MyRecipe.create({
        UserId,
        RecipeId: foundRecipeId,
      });

      res.status(201).json({ id: result.id, recipe: found.data.recipe.label });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecipeController;
