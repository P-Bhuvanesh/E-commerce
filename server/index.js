const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserAuth = require("./routes/AuthRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/auth", UserAuth);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connection established successfully"))
.catch((err) => console.error(err));

app.listen(process.env.PORT, (err) => {
  if (!err) console.log("Server is up and running");
  else console.error(err);
});
