import { Component, OnInit} from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { Options } from "highcharts/highstock";

import IndicatorsCore from "highcharts/indicators/indicators";
import IndicatorZigzag from "highcharts/indicators/zigzag";
IndicatorsCore(Highcharts);
IndicatorZigzag(Highcharts);

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
     console.log("window",window);
  }

    chartOptions: Options = {
    series: [
      {
        type: "line",
        id: "base",
        pointInterval: 24 * 3600 * 1000,
        data: [
          [1528205400000, 100],
          [1528291800000, 101],
          [1528378200000, 200],
          [1528464600000, 150],
          [1528723800000, 190],
          [1528810200000, 102],
          [1528896600000, 103],
          [1528983000000, 104],
          [1529069400000, 105],
          [1529328600000, 106],
          [1529415000000,107],
          [1529501400000, 51],
          [1529587800000, 15],
          [1529674200000, 52],
          [1529933400000, 53],
          [1530019800000, 54],
          [1530106200000, 55],
          [1530192600000, 56],
          [1530279000000, 71],
          [1530538200000, 72],
          [1530624600000, 187.79],
          [1530797400000, 185.26],
          [1530883800000, 185.42],
          [1531143000000, 189.5],
          [1531229400000, 190.71],
          [1531315800000, 188.5],
          [1531402200000, 189.53],
          [1531488600000, 191.08],
          [1531747800000, 191.52],
          [1531834200000, 189.75],
          [1531920600000, 191.78],
          [1532007000000, 189.69],        
        ]
      }     
    ]
  };
}
