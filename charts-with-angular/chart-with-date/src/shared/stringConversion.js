console.log("script loaded");
var reponseArray = [
  {
    cpykey_deviceid: 1,
    Risk_Rank: "MED",
    dumpdata: "20210725",
  },
  {
    cpykey_deviceid: 2,
    Risk_Rank: "MED",
    dumpdata: "20210912",
  },
];

function convertStringDateToYear(strDate) {
  return (
    strDate.slice(0, 4) + "/" + strDate.slice(4, 6) + "/" + strDate.slice(6, 8)
  );
}
reponseArray.forEach(function (res) {
  console.log("res.dumpdata", res.dumpdata);
  //20210725
  var convertedDate = convertStringDateToYear(res.dumpdata);
  console.log("convertedDate", convertedDate);
  res.dumpdata = new Date(convertedDate);
});
console.log("reponseArray", reponseArray);
