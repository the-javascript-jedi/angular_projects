import { Component, OnInit ,ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highlight-barchart',
  templateUrl: './highlight-barchart.component.html',
  styleUrls: ['./highlight-barchart.component.scss']
})
export class HighlightBarchartComponent implements OnInit {

@ViewChild("barchart", { static: false }) barchart: any;
targetCountry = 'Portugal';
chartOptions:Highcharts.Options = {}
constructor() { 
  const that = this;
  // let targetCountry = 'Portugal';
  this.targetCountry="May";
  this.chartOptions={
  chart: {
        type: 'column',
           events: {
        	render() {
          	let chart = this,x;            
            chart.series[0].points.forEach(p=> {
              let targetCountry = that.targetCountry;
              if (p.category === targetCountry) {
                x = p.x;
              	p.graphic.element.style.fill = 'red'
              }
            })
            
            chart.xAxis[0].ticks[x].label.element.style.fill = 'red'
          }
        }
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
        name: 'Tokyo',
        type:'column',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
            194.1, 95.6, 54.4]

    }]
  };
}

  // var me=this;
  Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {}
  
  ngOnInit(): void {
  }
}


