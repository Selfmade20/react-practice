const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.json());
app.use(cors());

port = process.env.PORT || 5000;

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to the mongoDB database");
  }
);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
