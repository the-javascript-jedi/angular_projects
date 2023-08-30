import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  xAxisSeriesData=[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

  yAxisSeriesData=[{
    name: 'Low Crash',
    data: [43934, 48656, 65165, 81827, 112143, 142383,
      171533, 165174, 155157, 161454, 154610,200000],
      type: 'line',
    color:'green',
  }, {
    name: 'Medium Crash',
    data: [24916, 37941, 29742, 29851, 32490, 30282,
      38121, 36885, 33726, 34243, 31050,2000],
      type: 'line',
    color:'yellow',
  }, {
    name: 'High Crash',
    data: [11744, 30000, 16005, 19771, 20185, 24377,
      32147, 30912, 29243, 29213, 25663,200],
      type: 'line',
    color:'red',
  }];      
  customPlotBands=[
  //   {
  //     from: -0.5,
  //     color: "#FFAAAA",
  //     to: 0.5,

  //   },{
  //     from: 1.5,
  //     color: "#FFAAAA",
  //     to: 2.5,
  //   },{
  //     from: 3.5,
  //     color: "#FFAAAA",
  //     to: 4.5,
  // }
]
  constructor() {
    this.generatePlotBands()
   }
 Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {};
  ngOnInit(): void {
    this.buildChartData();
  }

  buildChartData(){
    this.chartOptions={
    title: {
    text: 'U.S Solar Employment Growth',
    align: 'left'
  },
  subtitle: {
    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    align: 'left'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    },
    min : 0
  },
  plotOptions: {
    // display data labels all the time
        series: {
            dataLabels: {
                enabled: true,
                crop: false,
            }
        }
    },
  xAxis: {
        categories: this.xAxisSeriesData,
         min : 0,
        plotBands:this.customPlotBands,
        crosshair: true
    },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  series: this.yAxisSeriesData,
 annotations: [],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
  }
  }

  generatePlotBands(){
    // {
  //     from: -0.5,
  //     color: "#FFAAAA",
  //     to: 0.5,

  //   },{
  //     from: 1.5,
  //     color: "#FFAAAA",
  //     to: 2.5,
  //   },{
  //     from: 3.5,
  //     color: "#FFAAAA",
  //     to: 4.5,
  // }
    let startPlotBand=-.5
    let customPlotBandConstructed=[]
    this.xAxisSeriesData.forEach((val,index)=>{
     
      let customObj={
        from: startPlotBand,
        color:'lightgray',
        to:startPlotBand+1
      }
      if(index % 2==0){
         customPlotBandConstructed.push(customObj);
      }
      startPlotBand=startPlotBand+1;
    })
    console.log("customPlotBandConstructed",customPlotBandConstructed);
    this.customPlotBands=customPlotBandConstructed
  }
}
