import { Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import * as Highcharts from "highcharts/highstock";
import { Options } from "highcharts/highstock";
import {dataFromApiTS} from "./data/dummyData"

import IndicatorsCore from "highcharts/indicators/indicators";
import IndicatorZigzag from "highcharts/indicators/zigzag";
IndicatorsCore(Highcharts);
IndicatorZigzag(Highcharts);

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent implements OnInit {
  Highcharts: any = Highcharts;

  constructor() { }
  dataFromAPIS:any;
  chartData:any=[]

  ngOnInit(): void {
     console.log("window",window);
       // load data from apis
    this.dataFromAPIS=dataFromApiTS.data;
    console.log("this.dataFromAPIS",this.dataFromAPIS);
    let chartDataFormat=this.dataFromAPIS.map(data=>{
      let dumpDateFromAPI=data.dumpDate;
      let yearDumpDate=dumpDateFromAPI.substring(0,4);
      let monthDumpDate=dumpDateFromAPI.substring(4,6);
      let dayDumpDate=dumpDateFromAPI.substring(6,8);
      let dumpDateWithSlash=yearDumpDate+'-'+monthDumpDate+'-'+dayDumpDate;
      const convertedDumpDate=moment(dumpDateWithSlash,'YYYY-MM-DD').toDate();
      data.dumpDateTimeStamp=convertedDumpDate;
      data.dateInMilliSeconds=convertedDumpDate.getTime();
      // const convertedDumpDate=moment
      return data;
    });
// chartDataFormat.sort(function (a, b) {
//       // var dateA = new Date(a.dateInMilliSeconds);
//       // var dateB = new Date(b.dateInMilliSeconds);
//       return a.dateInMilliSeconds - b.dateInMilliSeconds;
//     });
// sort the chart data
    chartDataFormat.sort(function compare(a, b) {
      var dateA = new Date(a.dateInMilliSeconds).valueOf();
      var dateB = new Date(b.dateInMilliSeconds).valueOf();
      return dateA - dateB;
    });
    // create an array of arrays for the highcharts stock chart
    chartDataFormat.forEach(val=>{
      let chartArray=[];
      chartArray.push(val.dateInMilliSeconds);
      chartArray.push(val.ciscoMlFinal);
      this.chartData.push(chartArray)
    })
    console.log("this.chartData",this.chartData);
  }

    chartOptions: Options = {
    series: [
      {
        type: "line",
        id: "base",
        pointInterval: 24 * 3600 * 1000,
        data: this.chartData,
      },     
      {
        type: "zigzag",
        showInLegend: true,
        linkedTo: "base"
      }
    ]
  };

  getDates(){
    // var extremes = this.Highcharts.Series
   var extremes = this.chartOptions.xAxis
    console.log("extremes",extremes)
    console.log("this.chartOptions",this.chartOptions)
    console.log("this.Highcharts",this.Highcharts.Axis.x)
  }
}
