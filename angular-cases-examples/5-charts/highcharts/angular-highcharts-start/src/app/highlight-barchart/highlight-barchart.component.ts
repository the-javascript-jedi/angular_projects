import { Component, OnInit ,ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highlight-barchart',
  templateUrl: './highlight-barchart.component.html',
  styleUrls: ['./highlight-barchart.component.scss']
})
export class HighlightBarchartComponent implements OnInit {

@ViewChild("barchart", { static: false }) barchart: any;
colorData = [];
chartOptions:any = {}
constructor() { 
  const that = this;
  // let targetCountry = 'Portugal';
  this.colorData=[
        {
          y:10,
          type:'bar',
          color:'red',
        },
        {
          y:20,
          type:'bar',
          color:'green',
        },
        {
          y:95,
          type:'bar',
          color:'blue',
        },
        {
          y:25,
          type:'bar',
          color:'yellow',
        },
        {
          y:35,
          type:'bar',
          color:'pink',
        },
        {
          y:5,
          type:'bar',
          color:'lightblue',
        },
        {
          y:45,
          type:'bar',
          color:'lightgreen',
        },
        {
          y:55,
          type:'bar',
          color:'lightyellow',
        },
         {
          y:75,
          type:'bar',
          color:'purple',
        },
         {
          y:42,
          type:'bar',
          color:'Maroon ',
        },
        {
          y:62,
          type:'bar',
          color:'orange',
        },
        {
          y:72,
          type:'bar',
          color:'Goldenrod ',
        },
       ]
  this.chartOptions={
  chart: {
        type: 'column',
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
       data:this.colorData

    }]
  };
}

  // var me=this;
  Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {}
  
  ngOnInit(): void {
  }
}


