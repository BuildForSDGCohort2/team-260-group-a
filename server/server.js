const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

//Routes
const users = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", users);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
