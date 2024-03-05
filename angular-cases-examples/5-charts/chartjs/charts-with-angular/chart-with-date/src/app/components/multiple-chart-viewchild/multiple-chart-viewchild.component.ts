import { Component, AfterViewInit, QueryList, ViewChildren,OnInit,ViewChild, ElementRef } from '@angular/core';
import {ChartChildComponent} from './chart-child/chart-child.component'
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-multiple-chart-viewchild',
  templateUrl: './multiple-chart-viewchild.component.html',
  styleUrls: ['./multiple-chart-viewchild.component.css']
})
export class MultipleChartViewchildComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer: ElementRef;

  constructor() {
     // add registerables for enabling all the chart features
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.createCharts();
  }

  createCharts(): void {
    // Example data, replace with your own
    const datasets = [
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'green'],
      },
      {
        data: [15, 25, 35],
        backgroundColor: ['purple', 'orange', 'teal'],
      },
    ];

    datasets.forEach((dataset, index) => {
      const canvas = document.createElement('canvas');
      canvas.id = `chart-${index}`;
      this.chartContainer.nativeElement.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      new Chart(ctx, {
        type: 'bar', // or any other type
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [dataset],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }

}
