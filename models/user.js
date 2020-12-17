const mongoose = require("mongoose");

//define a schema
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
});

//compile model from schema
var User = mongoose.model("user", userSchema);

module.exports = User;
