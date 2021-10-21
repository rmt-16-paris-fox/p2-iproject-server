const { Video } = require('../models');

class Controller {
    static async postVideo(req, res, next) {
        const { title, yotubeUrl } = req.body;
        console.log(title, yotubeUrl)
        try {
            const result = await Video.create({ title, yotubeUrl });
            res.status(201).json({ title: result.title, yotubeUrl: result.yotubeUrl});
        } catch (err) {
            next(err);
        }
    }
    static async getVideo(req, res, next) {
        try {
            const video = await Video.findAll({ attributes: {
                exclude: ["createdAt", "updatedAt"]
            }})
            res.status(200).json(video);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller