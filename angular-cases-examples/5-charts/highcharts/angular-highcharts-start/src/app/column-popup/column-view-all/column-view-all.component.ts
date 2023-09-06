import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column-view-all',
  templateUrl: './column-view-all.component.html',
  styleUrls: ['./column-view-all.component.scss']
})
export class ColumnViewAllComponent implements OnInit {
 @Output() outputCloseModal = new EventEmitter();

viewAll=false;
    constructor() { }
Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      scrollablePlotArea: {
            minWidth: 700,
            scrollPositionX: 0
        }
    },
   title: {
      text: 'Stacked bar chart'
    }, 
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      },
      // show labels in end
      stackLabels: {
            enabled: true,
        },
      // for column chart some scenarios when using horizontal scaling use this below command
      reversedStacks:false
    },
    legend: {
      reversed: true
    },
     plotOptions: {
      series: {
        stacking: 'normal',       
        // show labels inside chart
        // show all data labels -
        dataLabels: {
                enabled: true,
                allowOverlap:true,
                crop:false,
                // overflow:'none',
        }
      }
    },
   series: [{
      name: 'John',
      type: 'column',
      data: [5, 3, 4, 7, 25,29, 32, 3, 2, 1,60,20,10,30,49,20]
    }, {
      name: 'Jane',
      type: 'column',
      data: [2,22, 53, 2, 1,13, 4, 14, 0, 5,20,30,21,2,32,34,53,56,43,23]
    }, {
      name: 'Joe',
      type: 'column',
      data: [13, 4, 40, 20, 65,5, 3, 4, 7,32, 3, 2, 1,60,20,]
    }]
  };
  ngOnInit(): void {
  }

  closeModal(modalStatus){
    this.outputCloseModal.emit(modalStatus)
  }
}
