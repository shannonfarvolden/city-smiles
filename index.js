const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/Organization");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const Organization = mongoose.model("organizations");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true
  })
);

app.get("/api/organizations", async (req, res) => {
  const organizations = await Organization.find();
  console.log(organizations);
  res.send(organizations);
});

app.get("/api/organizations/:id", async (req, res) => {
  const organizations = await Organization.findById(req.id);
  res.send(organizations);
});

app.post("/api/organizations", async (req, res) => {
  const { name, email, website, description, category } = JSON.parse(
    Object.keys(req.body)[0]
  );
  console.log(req.body);
  const organization = new Organization({
    name,
    email,
    website,
    description,
    category
  });

  try {
    const result = await organization.save();
    res.send(result);
  } catch (e) {
    res.status(422).send(e);
  }
});
app.listen(5000);
