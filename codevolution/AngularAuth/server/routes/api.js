const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.error("Connected to mongodb");
  }
});
router.get("/", (req, res) => {
  res.send("From API route");
});

module.exports = router;
