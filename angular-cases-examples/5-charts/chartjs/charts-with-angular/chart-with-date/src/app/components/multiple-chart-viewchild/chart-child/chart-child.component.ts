import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-chart-child',
  templateUrl: './chart-child.component.html',
  styleUrls: ['./chart-child.component.css']
})
export class ChartChildComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas', { static: true }) chartCanvas: ElementRef<HTMLCanvasElement>;
  @Input() chartData: any;
  @Input() chartType: string = 'bar'; // Default to bar, but allows for dynamic type
  myChartInfo;
  constructor() {
     Chart.register(...registerables);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
  filter(){
    this.chartData={
      labels: ['Label 1 updated', 'Label 2 updated', 'Label 3 updated'],
      datasets: [
        {
          data: [100, 50, 30],
          backgroundColor: ['blue', 'red', 'yellow'],
        },
      ],
    }
    this.myChartInfo.destroy();
    this.createChart();
  }

  createChart(): void {
    this.myChartInfo=new Chart(this.chartCanvas.nativeElement.getContext('2d'), {
      type: this.chartType,
      data: this.chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    } as any);
  }
}