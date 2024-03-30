const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require("./router/authRoute");
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection established successfully"))
    .catch((err) => console.error(err));

app.listen(process.env.PORT, (err) => {
    if (!err) console.log("Server is up and running");
    else console.error(err);
})