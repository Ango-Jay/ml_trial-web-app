const multer = require("multer");
const path = require("path");

var uploads = path.join(__dirname, "pyCode");
var date = new Date();

exports.fileDate =
  date.getFullYear() +
  "_" +
  (date.getMonth() + 1) +
  "_" +
  date.getDate() +
  "_" +
  date.getHours(); // +
// "-" +
// date.getMinutes();
//"-" +
//date.getSeconds();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploads);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + ".csv");
  },
});

exports.upload = multer({
  storage: storage,
}).single("pyForm");
