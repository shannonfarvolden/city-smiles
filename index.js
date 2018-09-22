const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.get("/api/test", (req, res) => {
  res.send("testing");
});
app.listen(5000);
