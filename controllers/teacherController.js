const { Teacher } = require('../models');
const { verifyToken } = require('../helpers/auth');
class TeacherController {
    static async updateProfile(req, res, next) {
        try {
            const { access_token } = req.headers;
            const { name } = req.body;
            const payload = verifyToken(access_token);
            const { id } = payload;
            const teacherId = id;
            const resp = await Teacher.update(
                { name },
                { where: { id: teacherId }, returning: true});
            console.log(resp);
            res.status(200).json(resp[1][0]);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TeacherController;