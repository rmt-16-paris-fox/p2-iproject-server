const {
  History,
  Article,
  User
} = require('../models');

class HistoryController {
  static async getHistory(req, res, next) {
    try {
      const getHistory = await History.findAll({
        order: [
          ["id", "DESC"]
        ],
        attribute: {
          exclude: ["updatedAt", "createdAt"],
          include: [Article, User]
        },
      });

      res.status(200).json(getHistory);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = HistoryController;