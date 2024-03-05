import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-multiple-chart',
  templateUrl: './multiple-chart.component.html',
  styleUrls: ['./multiple-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleChartComponent implements OnInit {
clickedCounter:number=1;
 charts = [];
clickedCount(){
  console.log("clickedCount")
  this.clickedCounter=this.clickedCounter+1;
  console.log("clickedCounter",this.clickedCounter)
}
  constructor() {
    // add registerables for enabling all the chart features
    Chart.register(...registerables);

    // Example: Initialize your charts data here
    // This could be replaced with dynamic data from a service
    this.charts = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      // Add more chart data objects as needed
    ];
  }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    this.charts.forEach((chart, index) => {
        this.createChart(chart, `chart-${index}`);
      });
  }

  createChart(chartData, chartId) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line', // Change chart type as needed (line, bar, etc.)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: chartData.label,
          data: chartData.data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
       options: {
      maintainAspectRatio: true,
      responsive: true,
    }
    } as any);
  }
}
