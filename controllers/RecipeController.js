const axios = require("axios");
const nodemailer = require("nodemailer");
const { User, MyRecipe, RateRecipe, sequelize } = require("../models");
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
const { htmlMail } = require("../helpers/mailer");

class RecipeController {
  static async getAllRecipes(req, res, next) {
    try {
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;
      const { name, minCal, maxCal, diet, mealType, time } = req.body;

      if (!name) {
        throw { name: "recipeNameEmpty" };
      }

      let calories;
      if (minCal && maxCal) {
        calories = `${minCal}-${maxCal}`;
      } else if (minCal) {
        calories = `${minCal}+`;
      } else if (maxCal) {
        calories = maxCal;
      }

      let field = "field=uri&field=label&field=image&field=yield&field=dietLabels&field=ingredientLines&field=calories&field=totalWeight&field=totalTime&field=cuisineType&field=mealType";
      let dietType = "";
      let meal = "";

      if (diet) {
        if (diet.length > 1) {
          dietType = "&diet=" + diet.join("&diet=");
        } else if (diet.length > 0) {
          dietType = "&diet=" + diet[0];
        }
        field += dietType;
      }

      if (mealType) {
        if (mealType.length > 1) {
          meal = "&mealType=" + mealType.join("&mealType=");
        } else if (mealType.length > 0) {
          meal = "&mealType=" + mealType[0];
        }
        field += meal;
      }

      if (time) {
        field += "&time=" + time;
      }

      const result = await axios({
        url: `https://api.edamam.com/api/recipes/v2?${field}`,
        params: {
          app_id,
          app_key,
          type: "public",
          q: name,
          calories,
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

  static async getRecipeMyRate(req, res, next) {
    try {
      const RecipeId = req.params.recipeId;

      const found = await RateRecipe.findOne({
        where: { UserId: req.user.id, RecipeId },
      });

      if (found) {
        res.status(200).json(found);
      } else {
        res.status(200).json({ rate: 0 });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getRecipeAvgRate(req, res, next) {
    try {
      const RecipeId = req.params.recipeId;

      const found = await RateRecipe.findAndCountAll({
        where: { RecipeId },
      });

      const count = await RateRecipe.count({
        where: { RecipeId },
      });

      let avg = 0;
      if (count !== 0) {
        const sum = await RateRecipe.sum("rate", {
          where: { RecipeId },
        });

        avg = sum / count;
      }

      res.status(200).json({ avg, count });
    } catch (err) {
      next(err);
    }
  }

  static async getAllMyRecipes(req, res, next) {
    try {
      const UserId = req.user.id;
      const MyRecipes = [];

      let result = await MyRecipe.findAll({
        where: { UserId },
      });

      if (result.length !== 0) {
        const app_id = process.env.EDAMAM_APP_ID;
        const app_key = process.env.EDAMAM_APP_KEY;

        for (const recipe of result) {
          let { RecipeId, id } = recipe;
          const found = await axios({
            url: `https://api.edamam.com/api/recipes/v2/${RecipeId}`,
            params: {
              app_id,
              app_key,
              type: "public",
            },
          });

          MyRecipes.push({ id, recipe: found.data.recipe });
        }

        const filtered = MyRecipes.map((recipe) => {
          return {
            id: recipe.id,
            uri: recipe.recipe.uri,
            label: recipe.recipe.label,
            image: recipe.recipe.image,
            yield: recipe.recipe.yield,
            dietLabels: recipe.recipe.dietLabels,
            ingredientLines: recipe.recipe.ingredientLines,
            calories: recipe.recipe.calories,
            totalWeight: recipe.recipe.totalWeight,
            totalTime: recipe.recipe.totalTime,
            cuisineType: recipe.recipe.cuisineType,
            mealType: recipe.recipe.mealType,
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
        url: `https://api.edamam.com/api/recipes/v2/${RecipeId}`,
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

      res.status(200).json({ message: "success deleted from your recipes" });
    } catch (err) {
      next(err);
    }
  }

  static async rateRecipe(req, res, next) {
    try {
      const { recipeId, rating, recipeName } = req.body;
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;

      const foundRecipe = await axios({
        url: `https://api.edamam.com/api/recipes/v2/${recipeId}`,
        params: {
          app_id,
          app_key,
          type: "public",
        },
      });

      if (!foundRecipe) {
        throw { name: "recipeNotFound" };
      }

      const found = await RateRecipe.findOne({
        where: { UserId: req.user.id, RecipeId: recipeId },
      });

      if (found) {
        const result = await RateRecipe.update(
          {
            rate: rating,
          },
          {
            where: {
              UserId: req.user.id,
              RecipeId: recipeId,
            },
          }
        );

        res.status(200).json({ message: "updated", recipe: recipeName });
      } else {
        const result = await RateRecipe.create({
          UserId: req.user.id,
          RecipeId: recipeId,
          rate: rating,
        });

        res.status(201).json({ message: "added", recipe: recipeName });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getAllRate(req, res, next) {
    try {
      const result = await sequelize.query(`select avg(rate), "RecipeId" from "RateRecipes" rr group by "RecipeId" `, { raw: true, type: QueryTypes.SELECT });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async sendEmail(req, res, next) {
    try {
      const app_id = process.env.EDAMAM_APP_ID;
      const app_key = process.env.EDAMAM_APP_KEY;
      const { name, minCal, maxCal, diet, mealType, time, amount } = req.body;

      if (!name) {
        throw { name: "recipeNameEmpty" };
      }

      let calories;
      if (minCal && maxCal) {
        calories = `${minCal}-${maxCal}`;
      } else if (minCal) {
        calories = `${minCal}+`;
      } else if (maxCal) {
        calories = maxCal;
      }

      let field = "field=uri&field=label&field=image&field=yield&field=dietLabels&field=ingredientLines&field=calories&field=totalWeight&field=totalTime&field=cuisineType&field=mealType";
      let dietType = "";
      let meal = "";

      if (diet) {
        if (diet.length > 1) {
          dietType = "&diet=" + diet.join("&diet=");
        } else if (diet.length > 0) {
          dietType = "&diet=" + diet[0];
        }
        field += dietType;
      }

      if (mealType) {
        if (mealType.length > 1) {
          meal = "&mealType=" + mealType.join("&mealType=");
        } else if (mealType.length > 0) {
          meal = "&mealType=" + mealType[0];
        }
        field += meal;
      }

      if (time) {
        field += "&time=" + time;
      }

      const result = await axios({
        url: `https://api.edamam.com/api/recipes/v2?${field}`,
        params: {
          app_id,
          app_key,
          type: "public",
          q: name,
          calories,
        },
      });

      // console.log(result.data.hits);
      let recipeSend = [];
      for (let i = 0; i < amount; i++) {
        recipeSend.push(result.data.hits[i]);
      }

      // console.log(recipeSend);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      const html = htmlMail(recipeSend);
      // console.log(html);

      const option = {
        from: process.env.EMAIL,
        to: req.user.email,
        subject: `Here is ${amount} recipe/s that you waiting for`,
        html,
      };

      transporter.sendMail(option, (err, info) => {
        if (err) {
          console.log(err);
          throw { name: "failedEmail" };
        }

        res.status(200).json({ message: "Email sent, thank you for using our app, please check your email periodically" });
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecipeController;
