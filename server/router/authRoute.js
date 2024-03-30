const express = require('express');
const router = express.Router();
const UserSchema = require("../models/userSchema");

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
    }
    catch (error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;