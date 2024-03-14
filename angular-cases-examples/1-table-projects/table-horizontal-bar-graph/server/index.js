const express = require("express");
const bodyParser = require("body-parser");
const { searchLessons } = require("./controllers/search-lessons");
const { searchCustomLessons } = require("./controllers/search-lessons");
const { searchGames } = require("./controllers/search-games");
const app = express();
app.use(bodyParser.json());
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
//localhost:5000/api/games?&filter=halo&pageSize=5
app.route("/api/games").get(searchGames);
//localhost:5000/api/lessons?courseId=0&filter=rxjs
app.route("/api/lessons").get(searchLessons);
//http://localhost:5000/api/custom_lessons?&filter=
app.route("/api/custom_lessons").get(searchCustomLessons);

// POST endpoint to handle prediction payload
// http://localhost:5000/predict
app.post("/predict", (req, res) => {
  if (req.body) {
    // console.log("Received Req Body:", req.body);
    res.status(200).send({
      // machine_status: "SUCCESS",
      machine_status: "FAILURE",
    });
  } else {
    res.status(400).send("Invalid request: Missing Data in the payload");
  }
});
//http://localhost:5000/recommendations
app.get("/recommendations", (req, res) => {
  res.send({
    recommendations: {
      llmResult: "LLM Result Test",
      recommendations: "recommendations test",
    },
  });
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
