class XenditController {
	static async ovo(req, res, next) {
		try {
			console.log(req);
			res.send(req.body);
		} catch (error) {
			next(err);
		}
	}
}

module.exports = XenditController;
