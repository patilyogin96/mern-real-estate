const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/index.route");
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => console.log("DBERR", err));

app.use(express.json()); //to parse incomming requests with json payloads

app.use(routes);

app.listen(5000, () => {
  console.log("SERVER STARTED");
});
