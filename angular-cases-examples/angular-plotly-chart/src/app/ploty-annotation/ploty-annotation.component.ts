import { Component, OnInit,ViewChild,ElementRef ,AfterViewInit} from '@angular/core';
import *as _ from 'lodash';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { ChartServiceThree } from '../../services/chart3.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ploty-annotation',
  templateUrl: './ploty-annotation.component.html',
  styleUrls: ['./ploty-annotation.component.scss']
})
export class PlotyAnnotationComponent implements OnInit {

  constructor(private _chartServiceThree:ChartServiceThree,private fb: FormBuilder) { }
  @ViewChild('scatterPlotWithAnnotation') scatterPlotWithAnnotation:ElementRef;
  scatterDataDropdown:any=[];
  xValues:any=[];
  yValues:any=[];
  zValues:any=[];
  myForm:FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  scatterPlotData;

  ngOnInit(): void {
    console.log("this._chartServiceThree.scatterChartData",this._chartServiceThree.scatterChartData);
    // this.scatterDataDropdown=this._chartServiceThree.scatterChartData;
    this.scatterDataDropdown=this._chartServiceThree.scatterChartData.map(function(val,index){
      return {
        item_id: index, item_text: val.toString()
      }
    })
    console.log("this.scatterDataDropdown",this.scatterDataDropdown)
    this.xValues=this._chartServiceThree.scatterChartData.map(val=>val[0]);
    this.yValues=this._chartServiceThree.scatterChartData.map(val=>val[1]);
    this.zValues=this._chartServiceThree.scatterChartData.map(val=>val[2]);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: this.ShowFilter
  };
  this.myForm = this.fb.group({
      city: [this.selectedItems]
  });
    console.log("this.xValues",this.xValues);
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    // console.log('this.myForm.value.city', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.city)
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
    // console.log('this.myForm.value.city', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.city)
  }

  createScatterPlotAnnotation(plots){
    console.log('createScatterPlotAnnotation', plots);
    let plotsArray=plots.map(val=>val.item_text.split(" "));
    console.log('plotsArray', plotsArray);
    let annotationsArr=[];
    for(var i=0;i<plotsArray.length;i++){
      annotationsArr.push({
        showarrow: false,
        // test:plotsArray[i][0].split(""),
        x: plotsArray[i][0].split("")[0],
        y: plotsArray[i][0].split("")[2],
        z: plotsArray[i][0].split("")[4],
        text: plotsArray[i].toString(),
        font: {
          color: "black",
          size: 12
        },
        xanchor: "left",
        xshift: 10,
        opacity: 0.7
      })
    }
    console.log("annotationsArr",annotationsArr)
    var layout = {
      scene: {
        // camera: {
        //   eye: {x: 2.1, y: 0.1, z: 0.9}
        // },
        annotations: annotationsArr
  }
  }
    const element=this.scatterPlotWithAnnotation.nativeElement;
    // console.log("element",element);
    // console.log("PlotlyJS",PlotlyJS);
    PlotlyJS.newPlot(element,this.scatterPlotData,layout);
    // PlotlyJS.update(element,this.scatterPlotData,layout);
  }
onSelectAll(items: any) {
    console.log('onSelectAll', items);
}
toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
}
getCameraPosition(){
  console.log("this.plotly",PlotlyJS);
}
handleLimitSelection() {
    if (this.limitSelection) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
}
  ngAfterViewInit(){
    this.initializeScatterPlot();
     //  Get clicked points of scatter plot
     (document.getElementById('scatterPlotWithAnnotation') as any).on('plotly_click', function(data){
      console.log("data.points[0]",data.points);
      console.log("data.points[0].x",data.points[0].x);
      console.log("data.points[0].y",data.points[0].y);
      console.log("data.points[0].z",data.points[0].z);
      alert('Clicked X='+data.points[0].x+'\n'+'Clicked Y='+data.points[0].y+'\n'+'Clicked Z='+data.points[0].z);
    });
  }
  initializeScatterPlot(){
    let trace1 = {
      x:this.xValues, y:this.yValues, z:this.zValues,
      mode: 'markers',
      marker: {
        size: 12,
        line: {
        color: 'rgba(212, 59, 59 , 0.14)',
        width: 0.5},
        opacity: 0.8},
      type: 'scatter3d'
    };    
    this.scatterPlotData = [trace1];
    const element=this.scatterPlotWithAnnotation.nativeElement;
    console.log("element",element);
    const style={
      // mkargin:{t:0},
      height: 750
    }
    console.log("PlotlyJS",PlotlyJS);
    PlotlyJS.newPlot(element,this.scatterPlotData,style);
  }
}
