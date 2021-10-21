const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authN } = require("../middlewares/authN");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/google-login", UserController.loginByGoogle);
router.get("/user-data", authN, UserController.getUserData);

module.exports = router;
