const axios = require('axios');
const { Keyboard } = require('../models');

const ovoCharge = async (req, res, next) => {
	try {
		const phoneNumber = req.body.phoneNumber;
		const keyboardId = Number(req.body.keyboardId);
		const time = new Date();

		const payload = {
			reference_id: `${req.user.email}-${keyboardId}-${time}`,
			currency: 'IDR',
			amount: 250000,
			checkout_method: 'ONE_TIME_PAYMENT',
			channel_code: 'ID_OVO',
			channel_properties: {
				mobile_number: phoneNumber,
			},
		};

		const axiosInstance = axios.create({
			baseURL: 'https://api.xendit.co/ewallets/charges',
		});

		const response = await axiosInstance({
			method: 'POST',
			url: '/',
			data: payload,
			auth: { username: process.env.XENDIT_API_KEY },
		});

		await Keyboard.update(
			{ ChargeId: response.data.id },
			{
				where: { id: keyboardId },
			}
		);

		res.status(200).json(response.data);
	} catch (err) {
		next(err.response);
	}
};

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

module.exports = { ovoCharge, ovoPay, ovoStatus };
