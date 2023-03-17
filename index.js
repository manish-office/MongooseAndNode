const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/Student");

// Connect to mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!!!!!!!!!!!");
  });

app.get("/", async (req, res) => {
  const students = await User.find();
  res.send(students);
  console.log(students);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
