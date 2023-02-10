import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataService} from '../../services/data.service'
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import HighchartsExporting from "highcharts/modules/exporting";
Highcharts3d(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-three-d-tooltip',
  templateUrl: './three-d-tooltip.component.html',
  styleUrls: ['./three-d-tooltip.component.scss']
})
export class ThreeDTooltipComponent implements OnInit {
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
   cloneToolTip = null;
    checkx = [];
    checky = [];
    clone = [];
    del = [];
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
      // {
      //   type: 'scatter3d',
      //   name:'series 1',
      //   cursor: 'pointer',
      //   point: {
      //     events: {
      //         click: function (event) {
      //           console.log("event",event.point.options)
      //           //check if point was already clicked
      //           // var me=this;
      //           var x = checkx.indexOf(event.point.x),
      //           y = checky.indexOf(event.point.y),
      //           z= checkz.indexOf(event.point.z)
      //           // console.log("x,y,z",x,y,z);
      //           // if (  x >= 0 &&  y >= 0 && x == y) {
                  
      //           // }
      //         }
      //     }
      //   },
      //   dataLabels: {
      //     enabled: true,
      //     formatter() {
      //       // console.log("this.point",this.point);
      //       if(this.point.options.x===1&&this.point.options.y==1&&this.point.options.z==1){
      //         return 'Test New Series 1'
      //       }else{
      //         return '';
      //       }
      //     }
      //   },
      //   data: this._dataService.firstData.scatterPlotData
      // },
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
    // add series
    this.updateChartTooltip()
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
        data: this._dataService.firstData.scatterPlotData
      }
      
      this.chart.addSeries(seriesAdded,true)    
  }
  ngAfterViewInit(): void {
    
  }
  updateChartTooltip(){
    // let chartPlotPoints=[];
    // chartPlotPoints=this.scatterDataDropdown.map(val=>{
    //   let plotPointsArray=val.item_text.split(',');
    //   val['x']=Number(plotPointsArray[0]);
    //   val['y']=Number(plotPointsArray[1]);
    //   val['z']=Number(plotPointsArray[2]);
    //   return val;
    // })
    // console.log("chartPlotPoints",chartPlotPoints);
    // let seriesAdded={
    //     type: 'scatter3d',
    //     name:'series 1',
    //     dataLabels: {
    //       enabled: true,
    //        formatter() {
    //         // console.log("formatter called")
    //         return chartPlotPoints.map((val,index)=>{
    //           if((this.point.options.x==chartPlotPoints[index].x)&&(this.point.options.y==chartPlotPoints[index].y)&&(this.point.options.z==chartPlotPoints[index].z)){
    //             return chartPlotPoints[index].item_text;
    //           }
    //           else{
    //           return '';
    //           }
    //         })
    //       }
    //     },
    //     data: this._dataService.firstData.scatterPlotData
    //   }
    //   this.chart.addSeries(seriesAdded,true)
  }
}
