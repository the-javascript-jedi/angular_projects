const DB_DATA = require("../data/db-halo-games");
// http://localhost:5000/api/searchTableWithPagination?&pageNumber=0&pageSize=10
// &filter=halo -- not mandatory field
// &sortOrder=asc -- not mandatory field
// &pageNumber field should be 0 by default
exports.searchTableWithPagination = function (req, res) {
  const queryParams = req.query;
  const filter = queryParams.filter || "",
    sortOrder = queryParams.sortOrder || "asc",
    pageNumber = parseInt(queryParams.pageNumber) || 0,
    pageSize = parseInt(queryParams.pageSize) || 10;
  sortColumn = queryParams.sortColumn ?? "seqNo";
  let haloGamesDataForTable = DB_DATA.HALO_GAMES;
  //   console.log("haloGamesDataForTable", haloGamesDataForTable);
  let gamesData = haloGamesDataForTable.sort((l1, l2) => l1.id - l2.id);
  //   console.log("gamesData", gamesData);
  if (filter) {
    console.log("filter", filter);
    gamesData = gamesData.filter((game) => {
      console.log("game", game);
      return (
        game.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0
      );
    });
  }
  if (sortOrder == "desc") {
    gamesData = gamesData.reverse();
  }
  const initialPos = pageNumber * pageSize;
  const gamesPageData = gamesData.slice(initialPos, initialPos + pageSize);
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ gamesPage: gamesPageData });
  }, 1000);
};

exports.searchTableCount = function (req, res) {
  let haloGamesDataForTable = DB_DATA.HALO_GAMES;
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ gamesPageCount: haloGamesDataForTable.length });
  }, 1000);
};
