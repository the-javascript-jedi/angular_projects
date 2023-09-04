const DB_DATA = require("../data/db-data");
exports.db_api_test_data = function (req, res) {
  const queryParams = req.query;
  let responseData = [];
  responseData = DB_DATA.TEST_DATA;
  console.log("responseData", responseData);
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ responseDataFromAPI: responseData });
  }, 1000);
};
