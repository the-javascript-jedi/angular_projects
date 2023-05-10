import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {

  constructor() { }
Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
   title: {
      text: 'Stacked bar chart'
    }, 
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
     plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
   series: [{
      name: 'John',
      type: 'column',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      type: 'column',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      type: 'column',
      data: [3, 4, 4, 2, 5]
    }]
  };
  ngOnInit(): void {
  }

}
