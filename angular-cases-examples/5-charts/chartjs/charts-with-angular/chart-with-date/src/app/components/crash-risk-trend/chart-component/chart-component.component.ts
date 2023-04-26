import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import {Chart,registerables} from 'chart.js';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {
  result:any;
  coinPrice:any;
  coinName:any;
  datesArray = [
  "2021-11-01",
  "2021-11-02",
  "2021-11-03",
  "2021-11-04",
  "2021-11-05",
  "2021-11-06",
  "2021-11-07",
];
// convert the dates to milliseconds
convertedDates = this.datesArray.map((date) => {
  return new Date(date).setHours(0, 0, 0, 0);
});
dataPoints = [18, 12, 6, 9, 12, 3, 9];
// chart data
data = {
  labels: this.datesArray,
  datasets: [
    {
      label: "Weekly Sales",
      data: this.dataPoints,
      backgroundColor: ["rgba(255, 26, 104, 0.2)"],
      borderColor: ["rgba(255, 26, 104, 1)"],
      borderWidth: 1,
    },
  ],
};
config = {
  type: "bar",
  data:this.data,
  options: {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};


  chart:any=[];
  showSelectedChartDate:any;
  subscription:Subscription|undefined;
  convertedStartDate:any;
  convertedEndDate:any;
  constructor(private _uiService:UiService,private _apiService:ApiService) {
    Chart.register(...registerables);
    this.subscription=this._uiService.getChartDate().subscribe((onToggleResponse)=>{
      this.showSelectedChartDate=onToggleResponse;
      var startDateToConvert=this.showSelectedChartDate.startDate.$d;
      var endDateToConvert=this.showSelectedChartDate.endDate.$d;
      this.convertedStartDate= new Date(startDateToConvert).setHours(0, 0, 0, 0);
      this.convertedEndDate= new Date(endDateToConvert).setHours(0, 0, 0, 0);
      console.log("this.showSelectedChartDate.startDate--chartcomponent",this.showSelectedChartDate.startDate.$d)
      console.log("convertedDate--chartcomponent",this.convertedStartDate,this.convertedEndDate)
    })

   }
  ngOnInit(): void {
//     this._apiService.getChartInformation().subscribe((res)=>{
//       this.result=res;
//       console.log("this.result",this.result);
// this.coinPrice=this.result.data.coins.map((coin:any)=>coin.price);
//       this.coinName=this.result.data.coins.map((coin:any)=>coin.name);

//       // show chart data
//       this.chart=new Chart('canvas',{
//         type:'line',
//         data:{
//           labels: this.datesArray,
//   datasets: [
//     {
//       label: "Weekly Sales",
//       data: this.dataPoints,
//       backgroundColor: "rgba(255, 26, 104, 0.2)",
//       borderColor: "rgba(255, 26, 104, 1)",
//       borderWidth: 1,
//     },
//   ],
//         }
//       })
//     })
  // show chart data
      this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels: this.datesArray,
  datasets: [
    {
      label: "Weekly Sales",
      data: this.dataPoints,
      backgroundColor: "rgba(255, 26, 104, 0.2)",
      borderColor: "rgba(255, 26, 104, 1)",
      borderWidth: 1,
    },
  ],
        }
      })
  }
  filterDate() {
  // const start1 = new Date(document.getElementById("start").value);
  // // setHours will convert to milliseconds
  // const start = start1.setHours(0, 0, 0, 0);
  // const end1 = new Date(document.getElementById("end").value);
  // const end = end1.setHours(0, 0, 0, 0);
  // filter dates based on the start and end dates
  // var startDate=this.convertedStartDate;
  // var endDate=this.convertedEndDate;
  var startDate=1635791400000;
  var endDate=1636050600000;
  const filterDates = this.convertedDates.filter(function (date) {
    return date >= startDate && date <= endDate;
  });
  // set chart js data to filtered data
  this.chart.config.data.labels = filterDates;
  // working on the data-so x axes data matches y axes data
  // find the start and end of the filtered array
 const startArray = this.convertedDates.indexOf(filterDates[0]);
 const endArray = this.convertedDates.indexOf(filterDates[filterDates.length - 1]);
  console.log("startArray-endArray", startArray + "-" + endArray);
  // duplicate the dataPoints array
  const copyDataPoints = [...this.dataPoints];
  //endArray- means index so we add +1
  copyDataPoints.splice(endArray + 1, filterDates.length);
  console.log("copyDataPoints", copyDataPoints);
  copyDataPoints.splice(0, startArray);
  console.log("copyDataPoints", copyDataPoints);
  this.chart.config.data.datasets[0].data = copyDataPoints;
  this.chart.update();
}


  } 

