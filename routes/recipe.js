const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");

router.get("/", RecipeController.getAllRecipes);

module.exports = router;
