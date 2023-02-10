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
    title: {
      text: '3D scatter chart',
    },    
    series: [ ],
    tooltip: {
      shared: true
    },
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
    // tooltip added on click
    let cloneToolTip = null;
    let checkx = [];
    let checky = [];
    let checkz = [];
    let clone = [];
    let del = [];
     let seriesAdded={
        type: 'scatter3d',
        name:'series 1',
        cursor: 'pointer',
        point: {
            events: {
              click: function (event) {
                  console.log("event",event.point.options);
                   //check if point was already clicked
                   var x = checkx.indexOf(event.point.options.x),
                   y = checky.indexOf(event.point.options.y),
                   z = checkz.indexOf(event.point.options.z)
                   if (x>=0&&y>=0&&x==y) {
                                //remove tooltip
                                (clone[x]).remove();
                                //remove xy coordinate and clone from array --> tooltip can be displayed again
                                clone.splice(x, 1);
                                checky.splice(x, 1);
                                checkx.splice(x, 1);
                   }else {
                                var cloneToolTip = this.series.chart.tooltip.label.element.cloneNode(true);
                               this.series.chart.container.firstChild.appendChild(cloneToolTip);
                                //save coordinates and tooltip object
                                checkx.push(event.point.options.x);
                                checky.push(event.point.options.y);
                                checkz.push(event.point.options.z)
                                clone.push(cloneToolTip);
                            }
              }
            }
        },
        dataLabels: {
          enabled: true,
          formatter() {
            return '';
          }
        },
        data: this._dataService.firstData.scatterPlotData
      }
      this.chart.addSeries(seriesAdded,true)
  }
}
