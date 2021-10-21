const router = require('express').Router();
const ArticleController = require("../controllers/ArticleController");
const imageMulter = require('../middlewares/multer');
const imageKit = require('../middlewares/imageKit');

router.post('/', imageMulter, imageKit, ArticleController.postArticle);
router.get('/', ArticleController.getArticle);
router.get('/:id', ArticleController.getArticleId);
router.put('/:id', imageMulter, imageKit, ArticleController.putArticleId);
router.delete('/:id', ArticleController.deleteArticleId);

module.exports = router