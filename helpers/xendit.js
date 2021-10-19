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

const ovoStatus = async (req, res, next) => {
	try {
		console.log(req.headers);

		const chargeId = req.body.data.id;
		const referenceId = req.body.data.reference_id.split('-');
		const status = req.body.data.status;

		if (status === 'SUCCEEDED') {
			await Keyboard.update(
				{
					isPaid: true,
				},
				{
					where: { id: Number(referenceId[1]) },
				}
			);
		}

		res.status(200).json({
			message: `Keyboard with id ${referenceId[1]} is paid! ChargeId = ${chargeId}`,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { ovoCharge, ovoStatus };
