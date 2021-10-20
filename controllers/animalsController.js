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
      const result = await Animal.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static async updateAnimal(req, res, next) {
    try {
      const { name, tax } = req.body;
      const foundAnimal = await Animal.findOne({
        where: {
          id: req.params.animalId
        }
      });
      if (foundAnimal) {
        await Animal.update({
          name, tax
        }, {
          where: {
            id: req.params.animalId
          }
        });
        res.status(200).json({ message: 'Animal with id ' + req.params.animalId + ' has been updated' });
      } else {
        throw ({ message: 'Animal Not Found' });
      }
    } catch (err) {
      next(err);
    }
  }
  static async deleteAnimal(req, res, next) {
    try {
      const foundAnimal = await Animal.findOne({
        where: {
          id: req.params.animalId
        }
      });
      if (foundAnimal) {
        await Animal.destroy({
          where: {
            id: req.params.animalId
          }
        });
        res.status(200).json({ message: 'Animal with id ' + req.params.animalId + ' has been deleted' });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;