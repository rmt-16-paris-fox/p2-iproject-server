const express = require("express");
const router = express.Router();
const error_handler = require("../middlewares/error_handler");

const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");

const AdminRouter = require("./AdminRoute");
const StudentRouter = require("./StudentRoute");
const MentorRouter = require("./MentorRoute");

router.post("/login", UserController.login);
router.use(authentication);
router.post("/assesment", UserController.assesment);
router.get("/req_user", UserController.req_user);
router.use("/admin", AdminRouter);
router.use("/student", StudentRouter);
router.use("/mentor", MentorRouter);
router.use(error_handler);

module.exports = router;
