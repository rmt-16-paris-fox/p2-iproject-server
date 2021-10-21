const { Course, Teacher } = require('../models');
const { verifyToken } = require('../helpers/auth');
class CourseController {
    static async addCourse(req, res, next) {
        try {
            const { access_token } = req.headers;
            const { name } = req.body;
            const payload = verifyToken(access_token);
            const { id } = payload;
            const teacherId = id;
            const resp = await Course.create({ name, teacherId });
            res.status(200).json(resp);
        } catch (error) {
            next(error);
        }
    }
    static async getAllCourses(req, res, next) {
        try {
            const { access_token } = req.headers;
            const { name } = req.body;
            const payload = verifyToken(access_token);
            const { id } = payload;
            const teacherId = id;
            const resp = await Teacher.findOne({
                include: ['Courses'],
                where: { id: teacherId }
            });
            res.status(200).json(resp);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CourseController;