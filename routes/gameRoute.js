const router = require("express").Router();
const gameController = require("../controllers/gameController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/", gameController.createGame);
router.get("/paginations", gameController.getPagination);
router.get("/apis", gameController.findGameDatabase);
router.get("/apis/:id", gameController.findGameDatabaseyId);
router.delete("/:id", authorization, gameController.deleteGame);

module.exports = router;
