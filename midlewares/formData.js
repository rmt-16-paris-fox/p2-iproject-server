const axios = require("axios");
const FormData = require("form-data");

const midleUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      next();
    }
    if (req.file.mimetype == `image/jpg` || req.file.mimetype == `image/jpeg`) {
      console.log("masuk midlewares");
      //   console.log(req.body);
      //   console.log(req.file);
      const endCodedFile = Buffer.from(req.file.buffer).toString("base64");
      //   console.log(endCodedFile);
      const form = new FormData();

      form.append("file", endCodedFile);
      form.append("fileName", req.file.originalname);
      // console.log("hrhrhrhr");

      const upload = await axios({
        method: "post",
        url: "https://upload.imagekit.io/api/v1/files/upload",
        data: form,
        headers: { ...form.getHeaders() },
        auth: {
          username: process.env.PRIVATE_KEY,
        },
      });
      if (!upload) {
        throw { name: "upload image error" };
      } else {
        req.body.imgUrl = upload.data.url;
        //   console.log("ini dari midleware");
        next();
      }
    } else {
      throw { name: `error format must jpg/jpeg` };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = midleUpload;
