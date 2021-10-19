const multer = require("multer");

const memory = multer.memoryStorage();
const upload = multer({
  memory,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error("Wrong image format, just allow png, jpg and jpeg"));
    }
  }
}).single("imgUrl");

module.exports = upload