const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");
const { authN } = require("../middlewares/authN");

router.get("/", RecipeController.getAllRecipes);
router.get("/recipeDetail/:recipeId", RecipeController.getRecipeDetail);
router.use(authN);
router.post("/myRecipes/:recipeId", RecipeController.postMyRecipe);

module.exports = router;
