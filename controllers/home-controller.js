class HomeController {
  static async loadHome(req, res, next) {
    try {
      res.send('hello world');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = HomeController;
