const FormData = require('form-data');
const axios = require('axios');

const uploadImages = async (req, res, next) => {
	try {
    // console.log('======================')
    // console.log(req.file)
    // console.log(req.files)
		if (req.files) {
			const files = req.files;

			const parsedFilesForm = files.map((el) => {
				if (
					el.mimetype !== 'image/jpeg' &&
					el.mimetype !== 'image/jpg' &&
					el.mimetype !== 'image/png'
				) {
					throw {
						name: `${el.originalname}'s format is not JPEG/JPG/PNG`,
					};
				}

				if (el.size > 255000) {
					throw {
						name: `${el.originalname} size is too big! Max size is 255 KB`,
					};
				}

				let parsedFile = el.buffer.toString('base64');
				let form = new FormData();

				form.append('file', parsedFile);
				form.append('fileName', el.originalname);
				form.append('folder', '/mtthwsbuild');
				return form;
			});

			let imageUrls = [];

			for (const form of parsedFilesForm) {
				const response = await axios.post(
					'https://upload.imagekit.io/api/v1/files/upload',
					form,
					{
						headers: form.getHeaders(),
						auth: { username: process.env.IMAGE_KIT_KEY },
					}
				);

				if (!response) {
					throw { name: 'imageKit error' };
				}

				imageUrls.push(response.data.url);
			}

			req.body.imageUrls = imageUrls;
		}

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = uploadImages;
