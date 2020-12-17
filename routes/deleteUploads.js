const fs = require("fs");

exports.deleteFile = (file) => {
  fs.unlink(file, (err) => {
    if (err) throw err;
  });
};

exports.timeRemaining = (DATE_CREATED) => {
  new Date(DATE_CREATED) - new Date();
};
