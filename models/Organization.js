const mongoose = require("mongoose");
const { Schema } = mongoose;

const organizationSchema = new Schema({
  name: String,
  email: String,
  website: String,
  description: String,
  category: String
});

mongoose.model("organizations", organizationSchema);
