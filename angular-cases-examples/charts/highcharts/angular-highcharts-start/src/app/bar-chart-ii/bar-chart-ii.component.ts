import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart-ii',
  templateUrl: './bar-chart-ii.component.html',
  styleUrls: ['./bar-chart-ii.component.scss']
})
export class BarChartIiComponent implements OnInit {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Historic World Population by Region',
      align: 'left'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
          'target="_blank">Wikipedia.org</a>',
      align: 'left'
  },
  xAxis: {
      categories: ['Africa is the mew', 'Addddddddddddddddddddddddddddddmerica', 'Asia', 'Europe', 'Oceania',''],
      title: {
          text: 'Countries'
      },
      labels: {
        formatter: function () {
            var text = this.value;
            var formatted = text.toString().length > 10 ? text.toString().substring(0, 10) + '...' : text;
            console.log("text.toString().length",text.toString().length)
            return '<div class="js-ellipse" style="width:100px; overflow:hidden" title="' + text + '">' + formatted + '</div>';
        },
        style: {
          width: 150
      },
        useHTML: true
    }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      outside: true,
      // valueSuffix: ' millions'
      useHTML: true,
      formatter: function () {
          return `<div class="tooltip">
            <p style="margin:0px;">The value for x is <b>${this.x}</b></p>
            <p style="margin:0px;">The value for y is <b>${this.y}</b></p>
          </div>`;
      }
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          },
          point: {
            events: {
              mouseOver: updateStackColor(0.2),
              mouseOut: updateStackColor(0)
            }
          }
      }
  },
  legend: {
      // layout: 'vertical',
      // align: 'right',
      // verticalAlign: 'top',
      // x: -40,
      // y: 80,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor:
      //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      // shadow: true
      layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor: '#FFFFFF'
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1990',
      type:'bar',
      data: [
        ['Shanghai', 24.2],
        ['Beijing', 20.8],
        ['Karachi', 14.9],
        ['Shenzhen', 13.7],
        ['Guangzhou', 13.1],
      ]
  }, 
  ]
  };
  
  ngOnInit(): void {
  }

}

function updateStackColor(alpha) {
  return function() {
    const x = this.x
    const color = Highcharts.color;
    // console.log("color",color);
    const colors = Highcharts.getOptions().colors;
    // console.log("colors",colors);
    this.series.chart.series.forEach((series, i) => {
      series.data.forEach(point => {
        const basePointColor = color(colors[i])
        const greyColor='rgba(128,128,128,1)';
        point.update({
          color: alpha === 0
            ? basePointColor.get() // set original color
            : point.x === x
              ? basePointColor.brighten(-alpha).get() // dim orignal color
              : greyColor // added grey color
        }, false)
      })
    })

    this.series.chart.redraw(false)
  }

}
