const multer = require("multer");

let storage = multer.memoryStorage();
let upload = multer({
  storage,
  limits: {
    fieldSize: 255000,
  },
});

let uploadImage = upload.single("imgUrl");

module.exports = { storage, upload, uploadImage };