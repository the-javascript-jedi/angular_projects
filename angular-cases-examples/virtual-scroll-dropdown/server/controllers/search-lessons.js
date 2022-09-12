const DB_DATA = require("../data/db-courses-data");
//localhost:5000/api/lessons?courseId=0&filter=rxjs
exports.searchLessons = function (req, res) {
  const queryParams = req.query;
  const courseId = queryParams.courseId,
    filter = queryParams.filter || "",
    sortOrder = queryParams.sortOrder || "asc",
    pageNumber = parseInt(queryParams.pageNumber) || 0,
    pageSize = parseInt(queryParams.pageSize) || 3;
  let lessonsTest = DB_DATA.LESSONS;
  //   console.log("lessonsTest", lessonsTest);
  console.log("lessonsTest", Object.values(lessonsTest));
  let lessons = Object.values(lessonsTest)
    .filter((lesson) => lesson.courseId == courseId)
    .sort((l1, l2) => l1.id - l2.id);
  console.log("lessons", lessons);
  if (filter) {
    console.log("filter", filter);
    // console.log("lessons", lessons);
    lessons = lessons.filter((lesson) => {
      console.log("lesson", lesson);
      return (
        lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >=
        0
      );
    });
  }
  if (sortOrder == "desc") {
    lessons = lessons.reverse();
  }
  const initialPos = pageNumber * pageSize;
  const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ lessons: lessonsPage });
  }, 1000);
};

exports.searchCustomLessons = function (req, res) {
  const queryParams = req.query;
  const filter = queryParams.filter || "";
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 10;

  let coursesCustomData = [];
  coursesCustomData = DB_DATA.COURSES;
  console.log("coursesCustomData", coursesCustomData);
  let all_courses_data = Object.values(coursesCustomData);
  if (filter) {
    // console.log("lessons", lessons);
    all_courses_data = all_courses_data.filter((courseVal) => {
      return (
        courseVal.description
          .trim()
          .toLowerCase()
          .search(filter.toLowerCase()) >= 0
      );
    });
  }
  const initialPos = pageNumber * pageSize;
  // const gamesDataPage = gamesData.slice(initialPos, initialPos + pageSize);
  const courseDataPage = all_courses_data.slice(initialPos, pageSize);
  setTimeout(() => {
    // res.status(200).json({ payload: lessonsPage });
    res.status(200).json({ responseDataFromAPI: courseDataPage });
  }, 1000);
};
