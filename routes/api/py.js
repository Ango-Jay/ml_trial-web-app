const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const fs = require("fs");
const upload = require("../../upload");
const path = require("path");
const delU = require("../deleteUploads");

/*Python get score route*/
router.get("/model_score", (req, res, next) => {
  let options = {
    mode: "text",
    encoding: "utf8",
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "C:/Users/REGINALD/Desktop/JEFF PG/NODEJS/anpr_trial/pyCode",
    //args: ['hello world ']
  };

  PythonShell.run("mlTest.py", options, function (err, result) {
    if (err) throw err;

    // result is an array consisting of messages collected
    //during execution of script.
    var data = {
      score: result + "%",
    };

    //data = JSON.stringify(data);
    res.json(data);
    const file = path.join(__dirname, "../../pyCode/pyForm.csv");
    delU.deleteFile(file);
  });
});

/*POST upload csv file route*/
router.post("/upload", (req, res, next) => {
  upload.upload(req, res, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("http://localhost:3000/solved");
});

module.exports = router;
