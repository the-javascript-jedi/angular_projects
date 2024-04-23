import { Component, OnInit ,ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {
  // Source : http://jsfiddle.net/BlackLabel/e7yuga5d/
  colorData = [];
  chartOptions:any = {}
   Highcharts: typeof Highcharts = Highcharts;
  constructor() { 
  const that = this;
  // let targetCountry = 'Portugal';
  this.colorData=[
        {
          y:10,
          type:'bar',
          color:'red',
          customOption1: "foo 1",
          customOption2: "bar 1"
        },
        {
          y:20,
          type:'bar',
          color:'green',
          customOption1: "another foo 2",
          customOption2: "another bar 2"
        },
        {
          y:95,
          type:'bar',
          color:'blue',
          customOption1: "another foo 3",
          customOption2: "another bar 3"
        },
        {
          y:25,
          type:'bar',
          color:'yellow',
          customOption1: "another foo 4",
          customOption2: "another bar 4"
        },
        {
          y:35,
          type:'bar',
          color:'pink',
          customOption1: "another foo 5",
          customOption2: "another bar 5"
        },
        {
          y:5,
          type:'bar',
          color:'lightblue',
          customOption1: "another foo 6",
          customOption2: "another bar 6"
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
    formatter() {

      return `
			x: ${this.x}, 
			y: ${this.y}, 
			your custom data: ${this.point.customOption1}, ${this.point.customOption2}
		`
    }
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

  ngOnInit(): void {
  }

}
