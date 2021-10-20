const axios = require("axios");
const formData = require("form-data");

const imagekit = async (req, res, next) => {

  try {
    if (!req.file) {
      if (req.body.imgUrl === undefined) {
        next({
          name: "NotFound"
        })
      } else {
        next()
      }
    } else if (req.file.size <= 10255000) {
      const newForm = new formData();
      const encodedFile = req.file.buffer.toString("base64");
      const originalName = req.file.originalname
      newForm.append("file", encodedFile);
      newForm.append("fileName", originalName);
      const encodedKey = Buffer.from(`${process.env.IMAGEKITPRIVATE}:`).toString("base64");

      const result = await axios({
        method: "POST",
        url: "https://upload.imagekit.io/api/v1/files/upload",
        data: newForm,
        headers: {
          ...newForm.getHeaders(),
          Authorization: `Basic ${encodedKey}`
        }
      })

      if (result) {
        req.body.imgUrl = result.data.url
        next()
      } else {
        next({
          name: "NotFound"
        })
      }
    } else {
      next({
        name: "ImageSizeError",
        message: "image size is too large, image size must be less than 255 Kb"
      })
    }

  } catch (error) {
    next(error)
  }
}

module.exports = imagekit