const express = require("express");
const UserSchema = require("../models/userModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;
    const existingUser = await UserSchema.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }
    const newUser = new UserSchema({ name, email, phoneNumber, password });
    await newUser.save();
    return res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
