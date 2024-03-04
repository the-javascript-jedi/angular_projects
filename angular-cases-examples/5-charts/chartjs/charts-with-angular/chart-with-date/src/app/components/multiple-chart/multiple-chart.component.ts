import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

@Component({
  selector: 'app-multiple-chart',
  templateUrl: './multiple-chart.component.html',
  styleUrls: ['./multiple-chart.component.css']
})
export class MultipleChartComponent implements OnInit {

 charts = [];

  constructor() {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

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
    });
  }
}
