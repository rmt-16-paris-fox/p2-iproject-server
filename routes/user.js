const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/google-login", UserController.loginByGoogle);
router.get("/user-data", UserController.getUserData);

module.exports = router;
