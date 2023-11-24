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

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// db.once("open", function () {
//   console.log("Connected to Database :: MongoDB");
// });

app.use(routes);

app.listen(5000, () => {
  console.log("SERVER STARTED");
});
