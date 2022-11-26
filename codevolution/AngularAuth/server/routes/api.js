const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const db =
  "mongodb+srv://nithin123:nithin123@cluster0.vm99a.mongodb.net/eventsdb";

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
