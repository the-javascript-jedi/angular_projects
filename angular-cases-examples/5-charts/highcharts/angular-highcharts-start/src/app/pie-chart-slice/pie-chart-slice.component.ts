import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart-slice',
  templateUrl: './pie-chart-slice.component.html',
  styleUrls: ['./pie-chart-slice.component.scss']
})
export class PieChartSliceComponent implements OnInit {

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
   }
 Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {};
  ngOnInit(): void {
    this.buildChartData();
  }

  buildChartData(){
    this.chartOptions={
chart: {
        type: 'pie'
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            slicedOffset: 20
        }
    },

    series: [{
        data: [
            {
                name: 'Chrome',
                y: 44.2,
                // selected: true,
                // sliced: true
            },
            ['IE7',       26.6],
            ['IE6',       20],
            ['Chrome',    3.1],
            ['Other',    5.4]
        ]
    }]
    }
  }
}
