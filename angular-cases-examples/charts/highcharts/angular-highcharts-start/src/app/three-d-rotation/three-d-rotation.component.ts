import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import * as Highcharts3d from "highcharts/highcharts-3d";
import Highcharts3d from 'highcharts/highcharts-3d';
// import * as HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExporting from "highcharts/modules/exporting";
Highcharts3d(Highcharts);
HighchartsExporting(Highcharts);
@Component({
  selector: 'app-three-d-rotation',
  templateUrl: './three-d-rotation.component.html',
  styleUrls: ['./three-d-rotation.component.scss']
})
export class ThreeDRotationComponent implements OnInit,AfterViewInit {
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      margin: 100,
      type: 'scatter3d',
      animation: false,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 250,
        viewDistance: 5,
        fitToPlot: false,
      },
    },

    title: {
      text: '3D scatter chart',
    },

    yAxis: {
      min: 0,
      max: 10,
      title: null,
    },

    xAxis: {
      min: 0,
      max: 10,
      gridLineWidth: 1,
    },

    zAxis: {
      min: 0,
      max: 10,
      showFirstLabel: false,
    },

    series: [
      {
        type: 'scatter3d',
        name:'series 1',
        data: [
          [1, 6, 5],
          [8, 7, 9],
          [1, 3, 4],
          [4, 6, 8],
          [5, 7, 7],
          [6, 9, 6],
          [7, 0, 5],
          [2, 3, 3],
          [3, 9, 8],
          [3, 6, 5],
          [4, 9, 4],
          [2, 3, 3],
        ],
      },
      {
        type: 'scatter3d',
        name:'series 2',
        data: [
          [3, 0, 2],
          [9, 9, 0],
          [3, 4, 8],
          [2, 6, 1],
          [8, 9, 2],
          [7, 6, 5],
          [6, 3, 1],
          [9, 3, 1],
          [8, 9, 3],
          [9, 1, 0],
          [3, 8, 7],
          [8, 0, 0],
        ],
      },
    ],
  };
  constructor() {
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
      self.addChartRotation();
    };
   }

   addChartRotation() {
    const chart = this.chart;
    const H = this.Highcharts;

    function dragStart(eStart) {
      eStart = chart.pointer.normalize(eStart);

      var posX = eStart.chartX,
        posY = eStart.chartY,
        alpha = chart.options.chart.options3d.alpha,
        beta = chart.options.chart.options3d.beta,
        sensitivity = 5, // lower is more sensitive
        handlers = [];

      function drag(e) {
        // Get e.chartX and e.chartY
        e = chart.pointer.normalize(e);

        chart.update(
          {
            chart: {
              options3d: {
                alpha: alpha + (e.chartY - posY) / sensitivity,
                beta: beta + (posX - e.chartX) / sensitivity
              }
            }
          },
          undefined,
          undefined,
          false
        );
      }

      function unbindAll() {
        handlers.forEach(function(unbind) {
          if (unbind) {
            unbind();
          }
        });
        handlers.length = 0;
      }

      handlers.push(H.addEvent(document, "mousemove", drag));
      handlers.push(H.addEvent(document, "touchmove", drag));

      handlers.push(H.addEvent(document, "mouseup", unbindAll));
      handlers.push(H.addEvent(document, "touchend", unbindAll));
    }

    H.addEvent(chart.container, "mousedown", dragStart);
    H.addEvent(chart.container, "touchstart", dragStart);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

}
