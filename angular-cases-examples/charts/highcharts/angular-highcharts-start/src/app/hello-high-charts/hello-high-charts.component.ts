import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-hello-high-charts',
  templateUrl: './hello-high-charts.component.html',
  styleUrls: ['./hello-high-charts.component.scss']
})
export class HelloHighChartsComponent implements OnInit {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  ngOnInit(): void {
  }

}
