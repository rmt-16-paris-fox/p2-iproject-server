const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");
const { authN } = require("../middlewares/authN");

router.get("/", RecipeController.getAllRecipes);
router.use(authN);

module.exports = router;
