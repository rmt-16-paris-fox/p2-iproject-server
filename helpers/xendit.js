const ovoPay = async (req, res, next) => {
	try {
		res.send({ pay: req.body });
	} catch (err) {
		next(err);
	}
};

const ovoStatus = async (req, res, next) => {
	try {
		res.send({ status: req.body });
	} catch (err) {
		next(err);
	}
};

module.exports = { ovoPay, ovoStatus };
