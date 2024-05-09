const express = require("express");
const router = express.Router();
const UserSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.get("/hi", (req, res) => {
  res.send("Hi");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;
    const existingUser = await UserSchema.findOne({ email: email });
    if (existingUser) {
      res.status(409).send({ message: "E-Mail already exists" });
      return;
    }
    const newUser = new UserSchema({ name, email, mobileNumber, password });
    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email: email });
    if (!user) return res.status(401).send({ message: "User not found" });
    const isUser = await bcrypt.compare(password, user.password);
    if (!isUser)
      return res.status(401).send({ message: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    res.status(200).send({ message: "Login Sucessfull", token: token });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
