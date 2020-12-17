const express = require("express");
const router = express.Router();
const User = require("../../models/user.js");

router.get("/", function (req, res) {
  User.find(function (err, user) {
    if (err) {
      return;
    } else {
      res.json(user);
    }
  });
});

//create a new user
router.post("/", function (req, res) {
  const newUser = new User({
    name: req.body.name,
  });
  newUser.save(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

//delete user
router.delete("/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return;
    } else {
      user.remove(function (err) {
        if (err) {
          return;
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});
module.exports = router;
