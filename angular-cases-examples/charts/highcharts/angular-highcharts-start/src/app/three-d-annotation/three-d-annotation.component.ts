import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataService} from '../../services/data.service'
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import HighchartsExporting from "highcharts/modules/exporting";
Highcharts3d(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-three-d-annotation',
  templateUrl: './three-d-annotation.component.html',
  styleUrls: ['./three-d-annotation.component.scss']
})
export class ThreeDAnnotationComponent implements OnInit {
  // multi select dropdown
  scatterData:any;
  scatterDataDropdown:any;
  myForm:FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  // scatter plot
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
    // annotations:[{
    //   draggable:'',
    //   labelOptions: {
    //       backgroundColor: 'rgba(255,255,255,0.5)',
    //       verticalAlign: 'top',
    //   },
    //   labels: [{
    //      point: {
    //             xAxis: 0,
    //             yAxis: 0,
    //             x: 1,
    //             y: 1,
    //         },
    //         text: 'Arbois'
    //   }]
    // }],
    title: {
      text: '3D scatter chart',
    },

    // yAxis: {
    //   min: 0,
    //   max: 10,
    //   title: null,
    // },

    // xAxis: {
    //   min: 0,
    //   max: 10,
    //   gridLineWidth: 1,
    // },

    // zAxis: {
    //   min: 0,
    //   max: 10,
    //   showFirstLabel: false,
    // },
    series: [
      {
        type: 'scatter3d',
        name:'series 1',
        dataLabels: {
          enabled: true,
          formatter() {
            // console.log("this.point",this.point);
            if(this.point.options.x===1&&this.point.options.y==1&&this.point.options.z==1){
              return 'Test New Series 1'
            }else{
              return '';
            }
          }
        },
        data: this._dataService.firstData.scatterPlotData
      },
      // {
      //   type: 'scatter3d',
      //   name:'series 2',
      //   dataLabels: {
      //     enabled: true,
      //     formatter() {
      //       console.log("this.point",this.point);
      //       if(this.point.options.x===8&&this.point.options.y==0&&this.point.options.z==0){
      //         return 'Test New Series 2'
      //       }else{
      //         return '';
      //       }
      //     }
      //   },
      //   data: this._dataService.secondData.scatterPlotData,
      // },
    ],
  };
  constructor(private fb: FormBuilder,private _dataService:DataService) {
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
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: this.ShowFilter
  };
  // this.scatterData=[...this._dataService.firstData.scatterPlotData,...this._dataService.secondData.scatterPlotData];
  this.scatterData=[...this._dataService.firstData.scatterPlotData];
  this.scatterDataDropdown=this.scatterData.map(function(val,index){
    return {
      item_id: index, item_text: val.toString()
    }
  })
  this.myForm = this.fb.group({
      city: [this.selectedItems]
  });
  }
  onItemSelect(item: any) {
    // console.log('onItemSelect', item);
    // console.log('this.myForm.value.city selected', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.city)
  }
  onItemDeSelect(item: any) {
    // console.log('onItemDeSelect', item);
    // console.log('this.myForm.value.city deselected', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.city)
  }

  createScatterPlotAnnotation(plots){
    console.log('createScatterPlotAnnotation', plots);
    // let plotsArray=plots.map(val=>val.item_text.split(" "));
    // console.log('plotsArray', plotsArray);
    // this.chartOptions.series.forEach(val=>{
    //   console.log("val",val);
    // })
    let chartPlotPointsFromDropdown=[];
    chartPlotPointsFromDropdown=plots.map(val=>{
      let plotPointsArray=val.item_text.split(',');
      val['x']=Number(plotPointsArray[0]);
      val['y']=Number(plotPointsArray[1]);
      val['z']=Number(plotPointsArray[2]);
      return val;
    })
    console.log("chartPlotPointsFromDropdown",chartPlotPointsFromDropdown);
    if ( this.chart.series.length) {
         this.chart.series[0].remove();
    }
        let seriesAdded={
        type: 'scatter3d',
        name:'series 1',
        dataLabels: {
          enabled: true,
           formatter() {
            // console.log("formatter called")
            return chartPlotPointsFromDropdown.map((val,index)=>{
              if((this.point.options.x==chartPlotPointsFromDropdown[index].x)&&(this.point.options.y==chartPlotPointsFromDropdown[index].y)&&(this.point.options.z==chartPlotPointsFromDropdown[index].z)){
                return chartPlotPointsFromDropdown[index].item_text;
              }
              else{
              return '';
              }
            })
          }
        },
        data: this._dataService.firstData.scatterPlotData
      }
      // 
      this.chart.addSeries(seriesAdded,true)
      // this.chart.series[0].dataLabels=customDataLabels
      // this.chart.series[0].setData(this._dataService.secondData.scatterPlotData,true)
      // this.chart.redraw();
    
  }
  ngAfterViewInit(): void {
    
  }
  updateChart(){
    let chartPlotPoints=[];
    // chartPlotPoints=[
    //   {item_id:0,item_text:'1,1,1',x:1,y:1,z:1},
    //   {item_id:1,item_text:'2,2,2',x:2,y:2,z:2},
    //   {item_id:2,item_text:'3,3,3,',x:3,y:3,z:3},
    //   {item_id:3,item_text:'6,6,6',x:6,y:6,z:6},
    //   {item_id:4,item_text:'9,9,9',x:9,y:9,z:9},
    // ]
    chartPlotPoints=this.scatterDataDropdown.map(val=>{
      let plotPointsArray=val.item_text.split(',');
      val['x']=Number(plotPointsArray[0]);
      val['y']=Number(plotPointsArray[1]);
      val['z']=Number(plotPointsArray[2]);
      return val;
    })
    console.log("chartPlotPoints",chartPlotPoints);
    let seriesAdded={
        type: 'scatter3d',
        name:'series 1',
        dataLabels: {
          enabled: true,
           formatter() {
            // console.log("formatter called")
            return chartPlotPoints.map((val,index)=>{
              if((this.point.options.x==chartPlotPoints[index].x)&&(this.point.options.y==chartPlotPoints[index].y)&&(this.point.options.z==chartPlotPoints[index].z)){
                return chartPlotPoints[index].item_text;
              }
              else{
              return '';
              }
            })
          }
        },
        data: this._dataService.firstData.scatterPlotData
      }
      this.chart.addSeries(seriesAdded,true)
  }
}
