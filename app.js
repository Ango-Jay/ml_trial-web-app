const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const pyRouter = require("./routes/api/py");
const usersRouter = require("./routes/api/users");
const itemsRouter = require("./routes/api/items");
const mongoose = require("mongoose");

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
/*
//database
//defualt mongoose connection
const mongoDB =
  "mongodb+srv://asama1234:asama1234@devc.7twek.mongodb.net/DevC?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get defualt connection
const db = mongoose.connection;

//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//success
db.once("open", function () {
  console.log("Connected");
});
//database
*/
//routes
app.use("/api/py", pyRouter);
app.use("/users/api", usersRouter);
app.use("/items", itemsRouter);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client-app/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client-app", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000);
console.log("Server started");

module.exports = app;
