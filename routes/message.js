const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");
const { authN } = require("../middlewares/authN");

router.get("/:recipeId", MessageController.connection);

module.exports = router;
