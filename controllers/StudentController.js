const { Student, Task, Score } = require("../models");
const { assesment } = require("../helpers/pronunciationAssesment");
class StudentController {
  static async getTask(req, res, next) {
    try {
      const student = await Student.findOne({
        where: {
          UserId: Number(req.user.id),
        },
      });
      const task = await Task.findAll({
        where: {
          StudentId: student.id,
        },
      });

      res.status(200).json({ task });
    } catch (err) {
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
