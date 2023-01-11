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
        data: this._dataService.firstData
      },
      {
        type: 'scatter3d',
        name:'series 2',
        dataLabels: {
          enabled: true,
          formatter() {
            // console.log("this.point",this.point);
            if(this.point.options.x===8&&this.point.options.y==0&&this.point.options.z==0){
              return 'Test New Series 2'
            }else{
              return '';
            }
          }
        },
        data: this._dataService.secondData,
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
  this.scatterDataDropdown=[
    {item_id: 0, item_text: '000'},
    {item_id: 1, item_text: '111'},
    {item_id: 2, item_text: '222'},
    {item_id: 3, item_text: '333'},
    {item_id: 4, item_text: '444'},
    {item_id: 5, item_text: '555'},
    {item_id: 6, item_text: '666'},
]
  this.myForm = this.fb.group({
      city: [this.selectedItems]
  });
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    // console.log('this.myForm.value.city', this.myForm.value.city);
    // this.createScatterPlotAnnotation(this.myForm.value.city)
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
    // console.log('this.myForm.value.city', this.myForm.value.city);
    // this.createScatterPlotAnnotation(this.myForm.value.city)
  }
  ngAfterViewInit(): void {
    
  }
  updateChart(){

  }
}
