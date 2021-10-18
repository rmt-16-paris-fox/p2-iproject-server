class XenditController {
	static async ovo(req, res, next) {
		try {
			console.log('hi');
			res.send('hello');
		} catch (error) {
			next(err);
		}
	}
}

module.exports = XenditController;
