const { Animal } = require('../models');

class Controller {
  static async addAnimal(req, res, next) {
    try {
      const { name, tax } = req.body;
      await Animal.create({ name, tax });
      res.status(201).json({ name, tax });
    } catch (err) {
      next(err);
    }
  }
  static async fetchAnimals(req, res, next) {
    try {

    } catch (err) {
      next(err);
    }
  }
  static async updateAnimal(req, res, next) {
    try {

    } catch (err) {
      next(err);
    }
  }
  static async deleteAnimal(req, res, next) {
    try {

    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;