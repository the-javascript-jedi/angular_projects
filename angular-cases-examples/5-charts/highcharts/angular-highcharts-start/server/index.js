const express = require("express");
const { db_api_test_data } = require("./controllers/api-data-controller");
const app = express();
// SET Headers to overcome CROSS Origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,custom-header"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
// http://localhost:5000/api/db_test_data
app.route("/api/db_test_data").get(db_api_test_data);

app.listen(5000, () => {
  console.log("running on port 5000");
});
