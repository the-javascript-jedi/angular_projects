import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-popup',
  templateUrl: './column-popup.component.html',
  styleUrls: ['./column-popup.component.scss']
})
export class ColumnPopupComponent implements OnInit {
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
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      type: 'column',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      type: 'column',
      data: [13, 4, 4, 0, 5]
    }]
  };
  ngOnInit(): void {
  }
closeViewAllPopu(event){
console.log("closeViewAllPopu",event);
  if(event==='close'){
    this.viewAll=false;
  }
}
}
