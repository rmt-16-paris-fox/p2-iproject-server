const router = require("express").Router();
const gameController = require("../controllers/gameController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/", gameController.createGame);
router.get("/paginations", gameController.getPagination);
router.get("/apis", gameController.findGameDatabase);
router.get("/apis/:id", gameController.findGameDatabaseyId);
router.get("/youtube/:params", gameController.getYoutubeLink);

//due to limited time the following endpoints hass
// router.use(authentication)
// router.delete("/bookmarks/:id", authorization, gameController.deleteBookmarks);
// router.post("/bookmarks", authorization, gameController.getBookmarks);

module.exports = router;

