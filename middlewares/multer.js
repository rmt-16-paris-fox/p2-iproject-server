const multer = require("multer");
const upload = multer({
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
      cb(null, true);
    } else {
      cb({ name: "imageTypeInvalid" });
    }
  },
  limits: {
    fileSize: 255 * 1000,
  },
});

module.exports = { upload };
