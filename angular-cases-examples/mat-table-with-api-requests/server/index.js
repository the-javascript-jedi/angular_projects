const express = require("express");
const { searchLessons } = require("./controllers/search-lessons");
const { searchGames } = require("./controllers/search-games");
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

//localhost:5000/api/lessons?courseId=0&filter=rxjs
app.route("/api/lessons").get(searchLessons);
//localhost:5000/api/games?&filter=halo
app.route("/api/games").get(searchGames);

app.listen(5000, () => {
  console.log("running on port 5000");
});
