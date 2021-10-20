const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");
const { authN } = require("../middlewares/authN");
const { authZ } = require("../middlewares/authZ");

router.post("/", RecipeController.getAllRecipes);
router.get("/recipeDetail/:recipeId", RecipeController.getRecipeDetail);
router.get("/recipeAvgRate/:recipeId", RecipeController.getRecipeAvgRate);

router.use(authN);
router.get("/myRecipes", RecipeController.getAllMyRecipes);
router.get("/recipeMyRate/:recipeId", RecipeController.getRecipeMyRate);
router.post("/myRecipes/:recipeId", RecipeController.postMyRecipe);
router.delete("/myRecipes/:id", authZ, RecipeController.deleteMyRecipeById);
router.post("/rateRecipe", RecipeController.rateRecipe);
router.post("/sendRecipes", RecipeController.sendEmail);

module.exports = router;
