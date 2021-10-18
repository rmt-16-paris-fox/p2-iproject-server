const ovoPay = async (req, res, next) => {
	try {
		res.send(req.body);
	} catch (err) {
		next(err);
	}
};

const ovoStatus = async (req, res, next) => {
	try {
		res.send(req.body);
	} catch (err) {
		next(err);
	}
};

module.exports = { ovoPay, ovoStatus };
