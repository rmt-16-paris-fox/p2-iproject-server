const multer = require("multer");

let storage = multer.memoryStorage();
let upload = multer({
  storage,
  limits: {
    fieldSize: 255000,
  },
});
// console.log(upload,'masuk multer');

let uploadImage = upload.single("imageUrl");

module.exports = { uploadImage };