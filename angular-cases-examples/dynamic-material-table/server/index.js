const express = require("express");
const customerData = require("./customerData").customerData;
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
// http://localhost:5000/customerData
app.get("/customerData", (req, res) => {
  // res.send("Hello Nithin");
  res.json(customerData);
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
