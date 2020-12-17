const mongoose = require("mongoose");

//define a schema
const Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

//compile model from schema
var Item = mongoose.model("item", itemSchema);

module.exports = Item;
