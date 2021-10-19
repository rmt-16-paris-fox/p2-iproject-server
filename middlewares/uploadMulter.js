const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage(), limits:{
  fieldSize: 10000000

} });

module.exports = upload