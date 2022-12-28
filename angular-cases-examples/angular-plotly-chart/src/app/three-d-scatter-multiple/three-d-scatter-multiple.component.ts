import { Component, OnInit,ViewChild,ElementRef ,AfterViewInit} from '@angular/core';
import *as _ from 'lodash';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { ChartService } from '../../services/chart.service';
import { ChartServiceTwo } from '../../services/chart2.service';

@Component({
  selector: 'app-three-d-scatter-multiple',
  templateUrl: './three-d-scatter-multiple.component.html',
  styleUrls: ['./three-d-scatter-multiple.component.scss']
})
export class ThreeDScatterMultipleComponent implements OnInit,AfterViewInit {

  constructor(private chartServiceOne:ChartService,private chartServiceTwo:ChartServiceTwo) { }
  @ViewChild('threedMultiple') el:ElementRef;
  trace1:any;
  trace2:any;
  data:any;
  ngOnInit(): void {  
    this.initializeChart();
  }
  clickButton(){
    console.log("button clicked",PlotlyJS);
    // PlotlyJS.downloadImage('threedMultiple');
    (document.getElementById('threedMultiple') as any).on('plotly_click', function(data){
      console.log("data.points[0]",data.points);
      console.log("data.points[0].x",data.points[0].x);
      console.log("data.points[0].y",data.points[0].y);
      console.log("data.points[0].z",data.points[0].z);
      alert('Clicked X='+data.points[0].x+'\n'+'Clicked Y='+data.points[0].y+'\n'+'Clicked Z='+data.points[0].z);
    });
    
  }
 ngAfterViewInit() {
     this.scatterChartWithMultipleData();
    //  Get clicked points of scatter plot
     (document.getElementById('threedMultiple') as any).on('plotly_click', function(data){
      console.log("data.points[0]",data.points);
      console.log("data.points[0].x",data.points[0].x);
      console.log("data.points[0].y",data.points[0].y);
      console.log("data.points[0].z",data.points[0].z);
      alert('Clicked X='+data.points[0].x+'\n'+'Clicked Y='+data.points[0].y+'\n'+'Clicked Z='+data.points[0].z);
    });
  }

  initializeChart(){
    this.trace1 = {
      x:this.chartServiceOne.dataX, y:this.chartServiceOne.dataY, z:this.chartServiceOne.dataZ,
      mode: 'markers',
      marker: {
        size: 12,
        line: {
        color: 'rgba(212, 59, 59 , 0.14)',
        width: 0.5},
        opacity: 0.8},
      type: 'scatter3d'
    };
    this.trace2 = {
      x:this.chartServiceTwo.dataTwoX, y:this.chartServiceTwo.dataTwoY, z:this.chartServiceTwo.dataTwoZ,
      mode: 'markers',
      marker: {
        color: 'rgb(212, 59, 59)',
        size: 12,
        symbol: 'circle',
        line: {
        color: 'rgb(127, 127, 127)',
        width: 1},
        opacity: 0.8},
      type: 'scatter3d'};
    
    this.data = [this.trace1, this.trace2];
  }

  scatterChartWithMultipleData(){
    const element=this.el.nativeElement;
    console.log("element",element);
    const style={
      // mkargin:{t:0},
      height: 750
    }
    console.log("PlotlyJS",PlotlyJS);
    PlotlyJS.newPlot(element,this.data,style);
  }
}
