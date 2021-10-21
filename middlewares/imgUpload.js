const axios = require("axios");
const FormData = require("form-data");

const imageKit = async (req, res, next) => {
  try {
    if (!req.file) {
      next();
    } else {
      const form = new FormData();

      form.append("file", req.file.buffer.toString("base64"));
      form.append("fileName", req.file.originalname);

      const upload = await axios({
        method: "POST",
        url: process.env.IMGKIT_API,
        headers: form.getHeaders(),
        auth: {
          username: process.env.IMGKIT_PRIVATE_KEY,
        },
        data: form,
      });

      if (upload.data.url) {
        req.body.imgUrl = upload.data.url;
        next();
      } else {
        throw { name: "errUpload" };
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { imageKit };
