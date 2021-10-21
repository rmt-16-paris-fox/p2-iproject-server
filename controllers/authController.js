const { TeacherNumber, Teacher } = require('../models');
const { comparePassword, createToken } = require('../helpers/auth');
const { OAuth2Client } = require('google-auth-library');
class AuthController {
    static async register(req, res, next) {
        try {
            const { name, NIP, password } = req.body;
            const teacherNumberFound = await TeacherNumber.findOne({ where: { NIP } });
            if(!teacherNumberFound) {
                throw { name: 'NIP is not found' };
            } 
            const nipId = teacherNumberFound.id;
            const resp = await Teacher.create({ name, nipId, password });
            res.status(201).json(resp);
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const { NIP, password } = req.body;
            const teacherNumberFound = await TeacherNumber.findOne({ where: { NIP } });
            if(!teacherNumberFound) {
                throw { name: 'NIP is not found' };
            } 
            const nipId = teacherNumberFound.id;
            const resp = await Teacher.findOne({ where: {nipId} });
            if(!resp) {
                throw { name: 'Wrong NIP/Password' };
            }
            if(!comparePassword(password, resp.password)) {
                throw { name: 'Wrong NIP/Password' };
            }
            const payload = {
                id: resp.id,
                NIP: NIP,
            };
            const token = createToken(payload);
            console.log(token);
            res.status(200).json({ access_token: token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;