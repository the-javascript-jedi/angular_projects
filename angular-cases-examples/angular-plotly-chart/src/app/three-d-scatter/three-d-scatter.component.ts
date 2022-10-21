import { Component, OnInit,ViewChild,ElementRef ,AfterViewInit} from '@angular/core';
import *as _ from 'lodash';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
// import {dataX,dataY,dataY} from './
import { ChartService } from '../services/chart.service';
@Component({
  selector: 'app-three-d-scatter',
  templateUrl: './three-d-scatter.component.html',
  styleUrls: ['./three-d-scatter.component.scss']
})
export class ThreeDScatterComponent implements OnInit,AfterViewInit  {

 @ViewChild('threed') el:ElementRef;

  ngOnInit(): void {
  }
  constructor(private chartService:ChartService){

  }
  ngAfterViewInit() {
    this.basicChart();
  }

  basicChart(){
    const element=this.el.nativeElement;
    console.log("element",element);
    const data=[{
    type: 'scatter3d',
    mode: 'markers',
    x: this.chartService.dataX,
    y: this.chartService.dataY,
    z: this.chartService.dataZ,
    opacity: 1,
    line: {
      width: 1,
      color: 'red',
      reversescale: false,
    },  
}]

    const style={
      // mkargin:{t:0},
      height: 750
    }
    console.log("PlotlyJS",PlotlyJS);
    PlotlyJS.newPlot(element,data,style)
    // console.log("PlotlyModule",PlotlyModule);
    // PlotlyJS.PlotSchema(element,data,style);
  }
}
