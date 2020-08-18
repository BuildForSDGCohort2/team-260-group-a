const express = require("express");
const app = express();
const mongoose = require("mongoose");

const auth = require("./routes/verifyToken");

require("dotenv").config();

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("DB connection has been made.")
);

app.use(express.json());

//Routes
const users = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/secret", auth, (req, res) => {
  res.send({ message: "You should not be able to see this." });
});

app.use("/api/users", users);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
