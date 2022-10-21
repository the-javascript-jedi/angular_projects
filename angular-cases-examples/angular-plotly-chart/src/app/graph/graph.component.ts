import { Component, OnInit,ViewChild,ElementRef ,AfterViewInit} from '@angular/core';
import *as _ from 'lodash';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit,AfterViewInit {

  constructor() { }
  @ViewChild('chart') el:ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.basicChart();
  }

  basicChart(){
    const element=this.el.nativeElement;
    console.log("element",element);
    const data=[{
      x:[1,2,3,4,5],
      y:[1,2,4,8,16],
    }]

    const style={
      mkargin:{t:0}
    }
    console.log("PlotlyJS",PlotlyJS);
    PlotlyJS.newPlot(element,data,style)
    // console.log("PlotlyModule",PlotlyModule);
    // PlotlyJS.PlotSchema(element,data,style);
  }
}
