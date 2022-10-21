import { Component, OnInit ,ViewChild,ElementRef, AfterViewInit} from '@angular/core';
import * as _ from 'lodash';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-plotly-chart',
  templateUrl: './plotly-chart.component.html',
  styleUrls: ['./plotly-chart.component.scss']
})

export class PlotlyChartComponent implements OnInit {

  @ViewChild('chart') el:ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }

  title = 'dynamic-plots';
  // Bar Chart
  graph1 = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: {title: 'Some Data to Hover Over'}
  };
  // Line chart
  graph2 = {
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: {title: 'Some Data to Highlight'}
  };

//   // Initialize a behavior subject to return the line chart data
// interactivePlotSubject$: Subject<any> = new BehaviorSubject<any>(this.graph2.data);
// // We'll bind the hover event from plotly
// hover(event: any): void {
//   // The hover event has a lot of information about cursor location.
//   // The bar the user is hovering over is in "pointIndex"
//   this.interactivePlotSubject$.next(
//     [this.graph2.data[event.points[0]].pointIndex]]
//   );
// }
// // Reset to default when hovering stops
// mouseLeave(event): void {
//   this.interactivePlotSubject$.next(this.graph2.data);
// }
}
