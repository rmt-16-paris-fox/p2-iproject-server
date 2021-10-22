const { Mentor, User, Student, Grade, Class, MyStudent } = require("../models");
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

  static async getAllClass(req, res, next) {
    try {
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        include: [Grade, Mentor],
        order: [["id", "DESC"]],
        where: {},
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

  static async getStudentClass(req, res, next) {
    try {
      let ClassId = Number(req.params.id);
      let { name, page } = req.query;
      const limit = 10;
      let offset = 0;
      if (page) {
        offset = limit * page - limit;
      }
      let option = {
        include: [
          {
            model: Student,
            where: {},
            include: [Grade],
          },
          Class,
        ],
        order: [["id", "DESC"]],
        where: {
          ClassId: ClassId,
        },
        limit,
        offset,
      };
      if (name) {
        option.include[0].where["name"] = { [Op.iLike]: `%${name}%` };
      }
      const result = await MyStudent.findAndCountAll(option);
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
  static async deleteClass(req, res, next) {
    try {
      const cek = await Class.findByPk(+req.params.id);
      if (cek) {
        await Class.destroy({
          where: { id: +req.params.id },
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
  static async deleteStudentClass(req, res, next) {
    try {
      const cek = await MyStudent.findByPk(+req.params.id);
      if (cek) {
        await MyStudent.destroy({
          where: { id: +req.params.id },
        });
        let message = `success to delete`;
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

  static async getSelectMentor(req, res, next) {
    try {
      const result = await Mentor.findAll();
      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }

  static async getSelectStudent(req, res, next) {
    try {
      const GradeId = +req.params.GradeId;
      const result = await Student.findAll({
        where: {
          GradeId: GradeId,
        },
      });
      res.status(200).json({ result });
    } catch (err) {
      next(err);
    }
  }
  static async saveClass(req, res, next) {
    try {
      const { name, GradeId, MentorId } = req.body;
      const result = await Class.create({
        name,
        GradeId,
        MentorId,
      });
      res.status(201).json({ result });
    } catch (err) {
      next(err);
    }
  }
  static async saveStudentClass(req, res, next) {
    try {
      const { StudentId, ClassId } = req.body;
      const cek = await MyStudent.findOne({
        where: {
          StudentId,
        },
      });
      if (!cek) {
        const result = await MyStudent.create({
          StudentId,
          ClassId,
        });
        res.status(201).json({ result });
      } else {
        throw { name: "data sudah ada" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
