const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 4, trim: true },
  password: { type: String, required: true, min: 4, trim: true },
});

module.exports = mongoose.model("User", userSchema);
