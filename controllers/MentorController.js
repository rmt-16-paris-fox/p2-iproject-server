const { MyStudent, Student, Mentor, Grade, Class, Task } = require("../models");
const { getPagingData } = require("../helpers/pagination");
const { Op } = require("sequelize");
class MentorController {
  static async getClass(req, res, next) {
    try {
      const mentor = await Mentor.findOne({
        where: {
          UserId: Number(req.user.id),
        },
      });
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        order: [["id", "DESC"]],
        include: [Grade],
        where: { MentorId: mentor.id },
        limit,
        offset,
      };
      if (name) {
        option.where["name"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await Class.findAndCountAll(option);
      const data = getPagingData(result, page, limit);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async getStudent(req, res, next) {
    try {
      const ClassId = req.params.id;
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        order: [["id", "DESC"]],
        include: {
          model: Student,
          include: [Grade],
          where: {},
        },
        where: { ClassId: ClassId },
        limit,
        offset,
      };
      if (name) {
        option.include.where["name"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await MyStudent.findAndCountAll(option);
      const data = getPagingData(result, page, limit);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getTask(req, res, next) {
    try {
      const ClassId = req.params.id;
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        order: [["id", "DESC"]],
        where: { ClassId: ClassId },
        limit,
        offset,
      };
      if (name) {
        option.where["task"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await Task.findAndCountAll(option);
      const data = getPagingData(result, page, limit);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async saveTask(req, res, next) {
    try {
      const { task, ClassId } = req.body;
      const result = await Task.create({
        task,
        ClassId,
      });
      res.status(201).json({ result });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = MentorController;
