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

  static async getAllMyRecipes(req, res, next) {
    try {
      const UserId = req.user.id;
      const MyRecipes = [];

      const result = await MyRecipe.findAll({
        where: { UserId },
      });

      if (result.length !== 0) {
        const app_id = process.env.EDAMAM_APP_ID;
        const app_key = process.env.EDAMAM_APP_KEY;

        for (const recipe of result) {
          let { RecipeId } = recipe;

          const found = await axios({
            url: `https://api.edamam.com/api/recipes/v2/${RecipeId}`,
            params: {
              app_id,
              app_key,
              type: "public",
            },
          });

          MyRecipes.push(found.data.recipe);
        }

        const filtered = MyRecipes.map((recipe) => {
          return {
            uri: recipe.uri,
            label: recipe.label,
            image: recipe.image,
            yield: recipe.yield,
            dietLabels: recipe.dietLabels,
            ingredientLines: recipe.ingredientLines,
            calories: recipe.calories,
            totalWeight: recipe.totalWeight,
            totalTime: recipe.totalTime,
            cuisineType: recipe.cuisineType,
            mealType: recipe.mealType,
          };
        });
        res.status(200).json(filtered);
      } else {
        res.status(200).json({ message: "Your recipe is empty" });
      }
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

  static async deleteMyRecipeById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await MyRecipe.destroy({
        where: { id },
      });

      res.status(200).json({ message: "Success delete from your recipe" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecipeController;
