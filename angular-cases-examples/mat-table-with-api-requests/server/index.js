const express = require("express");
const { searchGames } = require("./controllers/search-games");
const { searchTableWithPagination } = require("./controllers/pagination-table");
const { searchTableCount } = require("./controllers/pagination-table");
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

//localhost:5000/api/games?&filter=halo
app.route("/api/games").get(searchGames);
// http://localhost:5000/api/searchTableWithPagination?&sortOrder=asc&pageNumber=1&pageSize=3
app.route("/api/searchTableWithPagination").get(searchTableWithPagination);
// get games data count
// http://localhost:5000/api/searchTableCount
app.route("/api/searchTableCount").get(searchTableCount);

app.listen(5000, () => {
  console.log("running on port 5000");
});
