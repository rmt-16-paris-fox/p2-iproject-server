const { Student, Task, Score, MyStudent } = require("../models");
const { assesment } = require("../helpers/pronunciationAssesment");
const { getPagingData } = require("../helpers/pagination");
class StudentController {
  static async getTask(req, res, next) {
    try {
      const id = Number(req.user.id);
      const student = await Student.findOne({ where: { UserId: id } });
      const kelas = await MyStudent.findOne({
        where: { StudentId: student.id },
      });
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        order: [["id", "DESC"]],
        where: { ClassId: kelas.ClassId },
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
  static async getDetailTask(req, res, next) {
    try {
      const task = await Task.findByPk(Number(req.params.id));

      res.status(200).json({ task });
    } catch (err) {
      next(err);
    }
  }

  static async assesment(req, res, next) {
    try {
      const id = Number(req.params.id);
      const task = await Task.findByPk(id);
      if (task.status === "uncompleted") {
        Task.update(
          {
            status: "completed",
          },
          {
            where: {
              id: id,
            },
          }
        );
        const base64 = req.body.base64;
        const result = await assesment(base64, task.task);
        Score.create({
          score: result.score,
          TaskId: id,
        });
        res.status(200).json({ result });
      } else {
        res.status(400).json({ error: "your task is completed" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getScore(req, res, next) {
    try {
      const id = Number(req.params.id);
      const result = await Score.findOne({
        where: {
          TaskId: id,
        },
      });
      console.log(result);
      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = StudentController;
