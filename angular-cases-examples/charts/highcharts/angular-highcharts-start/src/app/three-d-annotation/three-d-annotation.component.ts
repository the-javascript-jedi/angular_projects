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
    title: {
      text: '3D scatter chart',
    },
    series: [
      {
        type: 'scatter3d',
        name:'series 1',
        dataLabels: {
          enabled: true,
          formatter() {
            return '';
          }
        },
        data: this._dataService.firstData.scatterPlotData
      },
    ],
  };
  constructor(private fb: FormBuilder,private _dataService:DataService) {
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
      self.addChartRotation();
    };
   }
  // Scatter chart rotation
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
      allowSearchFilter: this.ShowFilter,
      enableCheckAll:false
  };

  // this.scatterData=[...this._dataService.firstData.scatterPlotData,...this._dataService.secondData.scatterPlotData];
  this.scatterData=[...this._dataService.firstData.scatterPlotData];
  this.scatterDataDropdown=this.scatterData.map(function(val,index){
    return {
      item_id: index, item_text: val.toString()
    }
  })
  this.myForm = this.fb.group({
      devicesForScatterPlot: [this.selectedItems]
  });
  }
  onItemSelect(item: any) {
    // console.log('onItemSelect', item);
    // console.log('this.myForm.value.city selected', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.devicesForScatterPlot)
  }
  onItemDeSelect(item: any) {
    // console.log('onItemDeSelect', item);
    // console.log('this.myForm.value.city deselected', this.myForm.value.city);
    this.createScatterPlotAnnotation(this.myForm.value.devicesForScatterPlot)
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
    console.log("this.chart",this.chart)
    if ( this.chart.series.length) {
         this.chart.series[0].remove();
    }
        let seriesAdded={
        type: 'scatter3d',
        name:'series 1',
        dataLabels: {          
           formatter:function(format) {
            // console.log("formatter called")
            // console.log("format",format)
            // console.log("this",this)
            var chartVal= chartPlotPointsFromDropdown.map((val,index)=>{
              if((this.point.options.x==chartPlotPointsFromDropdown[index].x)&&(this.point.options.y==chartPlotPointsFromDropdown[index].y)&&(this.point.options.z==chartPlotPointsFromDropdown[index].z)){
                return chartPlotPointsFromDropdown[index].item_text
              }
              else{
                return 'emptyVal';
              }
            })
            var newChartVal=chartVal.filter(val=>val!=='emptyVal')
            // console.log("newChartVal",newChartVal);
            return newChartVal;
          },
          enabled: true,
          useHTML:false,
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
}
