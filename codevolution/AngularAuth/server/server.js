const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const PORT = 5000;
const api = require("./routes/api");

const app = express();
// use cors middleware
app.use(cors());

app.use(bodyParser.json());

app.use("/api", api);
// test method
app.get("/", function (req, res) {
  res.send("Hello from Server");
});

app.listen(PORT, function () {
  console.log("Server running on localhost:" + PORT);
});
