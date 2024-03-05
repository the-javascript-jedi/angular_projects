import { Component, AfterViewInit, QueryList, ViewChildren,OnInit,ViewChild, ElementRef } from '@angular/core';
import {ChartChildComponent} from './chart-child/chart-child.component'
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-multiple-chart-viewchild',
  templateUrl: './multiple-chart-viewchild.component.html',
  styleUrls: ['./multiple-chart-viewchild.component.css']
})
export class MultipleChartViewchildComponent {
 chartData = [
    {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'green'],
        },
      ],
    },
    {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          data: [15, 25, 35],
          backgroundColor: ['purple', 'orange', 'teal'],
        },
      ],
    },
    {
      labels: ['Label 1', 'Label 2', 'Label 3','Label 4','Label 5','Label 6'],
      datasets: [
        {
          data: [70, 20, 30,90,50,100],
          backgroundColor: ['red', 'blue', 'green','purple', 'orange', 'teal'],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
