const { Mentor, User, Student, Grade } = require("../models");
const { getPagingData } = require("../helpers/pagination");
const { Op } = require("sequelize");
class AdminController {
  static async getAllMentor(req, res, next) {
    try {
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        order: [["id", "DESC"]],
        where: {},
        limit,
        offset,
      };
      if (name) {
        option.where["name"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await Mentor.findAndCountAll(option);
      const data = getPagingData(result, page, limit);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getAllStudent(req, res, next) {
    try {
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        include: [Grade],
        order: [["id", "DESC"]],
        where: {},
        limit,
        offset,
      };
      if (name) {
        option.where["name"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await Student.findAndCountAll(option);
      const data = getPagingData(result, page, limit);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async saveMentor(req, res, next) {
    try {
      const { email, name, educationalBackground, address, phoneNumber } =
        req.body;
      const user = await User.create({
        name,
        email,
        password: email,
        role: "mentor",
      });
      const result = await Mentor.create({
        name,
        educationalBackground,
        address,
        phoneNumber,
        UserId: user.id,
      });
      res.status(201).json({ result });
    } catch (err) {
      next(err);
    }
  }

  static async saveStudent(req, res, next) {
    try {
      const { email, name, phoneNumber, birthDay, school, GradeId } = req.body;
      const user = await User.create({
        name,
        email,
        password: email,
        role: "student",
      });

      const result = await Student.create({
        name,
        birthDay,
        phoneNumber,
        school,
        GradeId,
        UserId: user.id,
      });
      res.status(201).json({ result });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteMentor(req, res, next) {
    try {
      const cek = await Mentor.findByPk(+req.params.id);
      if (cek) {
        await Mentor.destroy({
          where: { id: +req.params.id },
        });
        await User.destroy({
          where: {
            id: cek.UserId,
          },
        });
        let message = `${cek.name} success to delete`;
        res.status(200).json({ message });
      } else {
        throw { name: "not found" };
      }
    } catch (err) {
      next(err);
    }
  }
  static async deleteStudent(req, res, next) {
    try {
      const cek = await Student.findByPk(+req.params.id);
      if (cek) {
        await Student.destroy({
          where: { id: +req.params.id },
        });
        await User.destroy({
          where: {
            id: cek.UserId,
          },
        });
        let message = `${cek.name} success to delete`;
        res.status(200).json({ message });
      } else {
        throw { name: "not found" };
      }
    } catch (err) {
      next(err);
    }
  }
  static async detailMentor(req, res, next) {
    try {
      const id = Number(req.params.id);
      const result = await Mentor.findByPk(id);
      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }
  static async updateMentor(req, res, next) {
    try {
      const id = Number(req.params.id);
      const { name, educationalBackground, address, phoneNumber } = req.body;
      console.log(name);
      console.log(req.body);
      const result = await Mentor.update(
        {
          name,
          educationalBackground,
          address,
          phoneNumber,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      );
      res.status(200).json({ message: "Success to Update" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
