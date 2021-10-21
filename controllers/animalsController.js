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
  static async fetchData(req, res, next) {
    try {
      const result = await Animal.findAll({
        order: [
          ['updatedAt', 'DESC']
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      res.status(200).json({ result: result, name: req.user.name });
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
        if (foundAnimal) {
          res.status(200).json({ message: 'Animal with id ' + req.params.animalId + ' has been deleted' });
        } else {
          res.status(404).json({ message: 'Animal not found' });
        }
      }
    } catch (err) {
      next(err);
    }
  }
  static async findAnimal(req, res, next) {
    try {
      const foundAnimal = await Animal.findOne({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        where: {
          name: req.params.animalName
        }
      });
      if (foundAnimal) {
        res.status(200).json(foundAnimal);
      } else {
        res.status(404).json({ message: 'Animal not found' });
      }
    } catch (err) {

    }
  }
}

module.exports = Controller;