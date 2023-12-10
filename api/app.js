const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/index.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
const path = require("path");

const app = express();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => console.log("DBERR", err));

const __dirname = path.resolve();

app.use(express.json()); //to parse incomming requests with json payloads
app.use(cookieParser());

app.use(routes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.listen(5000, () => {
  console.log("SERVER STARTED");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
