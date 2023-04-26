const DB_DATA = require("../data/db-halo-games");
exports.searchGames = function (req, res) {
  const queryParams = req.query;
  const filter = queryParams.filter || "";

  let games = DB_DATA.HALO_GAMES;

  if (filter) {
    // console.log("lessons", lessons);
    games = games.filter((gameVal) => {
      return (
        gameVal.description.trim().toLowerCase().search(filter.toLowerCase()) >=
        0
      );
    });
  } else {
    games = games.slice(0, 10);
  }
  console.log("games", games);
  console.log("filter", filter);
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ gamesData: games });
  }, 1000);
};
