const express = require("express");
const { searchLessons } = require("./controllers/search-lessons");
const { searchGames } = require("./controllers/search-games");
const { storesData } = require("./data/storesData");
const coinsData = require("./data/coins").coinsData;
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
// http://localhost:5000/coins
app.get("/coins", (req, res) => {
  // res.send("Hello Nithin");
  res.json(coinsData);
});
// http://localhost:5000/storesData
app.get("/storesData", (req, res) => {
  // res.send("Hello Nithin");
  res.json(storesData);
});
//localhost:5000/api/lessons?courseId=0&filter=rxjs
app.route("/api/lessons").get(searchLessons);
//localhost:5000/api/games?&filter=halo
app.route("/api/games").get(searchGames);

app.listen(5000, () => {
  console.log("running on port 5000");
});
