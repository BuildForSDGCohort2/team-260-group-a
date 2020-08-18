const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

router.get("/", (req, res) => {
  res.send("Users home page");
});

router.post(
  "/register",
  [
    body("name").isLength({ min: 6 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send({ message: "Email already in use." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    try {
      const savedUser = await user.save();
      res.send({ userId: savedUser._id });
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ message: "Username or Password incorrect" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res
        .status(400)
        .send({ message: "Username or Password incorrect" });

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  }
);

module.exports = router;
