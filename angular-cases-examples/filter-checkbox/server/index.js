const express = require("express");
const { storesData } = require("./data/storesData");
const app = express();
// SET Headers to overcome CROSS Origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
// http://localhost:5000/storesData
app.get("/storesData", (req, res) => {
  // res.send("Hello Nithin");
  res.json(storesData);
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
