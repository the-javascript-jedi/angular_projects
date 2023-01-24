const DB_DATA = require("../data/db-halo-games");
exports.searchGames = function (req, res) {
  const queryParams = req.query;
  const filter = queryParams.filter || "";
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 10;
  let gamesData = [];
  gamesData = DB_DATA.HALO_GAMES;
  if (filter) {
    // console.log("lessons", lessons);
    gamesData = gamesData.filter((gameVal) => {
      return (
        gameVal.description.trim().toLowerCase().search(filter.toLowerCase()) >=
        0
      );
    });
  }
  console.log("gamesData", gamesData);
  console.log("filter", filter);
  const initialPos = pageNumber * pageSize;
  // const gamesDataPage = gamesData.slice(initialPos, initialPos + pageSize);
  const gamesDataPage = gamesData.slice(initialPos, pageSize);

  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ responseDataFromAPI: gamesDataPage });
  }, 3000);
};
