const router = require("express").Router();
const User = require("../model/user");

router.post("/register", async (req, res) => {
  (username = req.body.username), (password = req.body.password);

  const newUser = new User({
    username,
    password,
  });

  try {
    const savedUser = await newUser.save();
    return res.send(savedUser);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {}
  res.send(err);
});

module.exports = router;
