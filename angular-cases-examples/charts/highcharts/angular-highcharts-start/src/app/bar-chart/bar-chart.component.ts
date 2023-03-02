import { Component, OnInit ,ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
// source
// https://stackblitz.com/edit/angular-chart-export?file=src%2Fapp%2Fapp.component.html

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @ViewChild("lineChart", { static: false }) lineChart: any;
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
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
          text: 'Countries'
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
      valueSuffix: ' millions'
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
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1990',
      type:'bar',
      data: [631, 727, 3202, 721, 26]
  }, 
  ],
  // disable context menu
  exporting: { enabled: false }
  };
  
  ngOnInit(): void {
  }

  downloadChart(){
     this.lineChart.chart.exportChart({
          type: "image/png",
          filename: "chart download"
        });
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