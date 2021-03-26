const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const signUp = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  signUp
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "Email not found" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
    res.redirect("/");
    res.render("/");
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});
module.exports = router;
