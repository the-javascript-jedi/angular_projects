import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HelloHighChartsComponent} from './hello-high-charts/hello-high-charts.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ThreeDScatterPlotComponent} from './three-d-scatter-plot/three-d-scatter-plot.component';
import {ThreeDRotationComponent} from './three-d-rotation/three-d-rotation.component';
import {ThreeDAnnotationComponent} from './three-d-annotation/three-d-annotation.component';
import {BarChartIiComponent} from './bar-chart-ii/bar-chart-ii.component';
import { ThreeDTooltipComponent } from './three-d-tooltip/three-d-tooltip.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { HighlightBarchartComponent } from './highlight-barchart/highlight-barchart.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartApiDataComponent } from './line-chart-api-data/line-chart-api-data.component';
import { ColumnPopupComponent } from './column-popup/column-popup.component';
import { PieChartSliceComponent } from './pie-chart-slice/pie-chart-slice.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BubbleChartIiComponent } from './bubble-chart-ii/bubble-chart-ii.component';

const routes: Routes = [
  {path:'',redirectTo:'helloHighChart', pathMatch: 'full' },
  { path: 'helloHighChart', component: HelloHighChartsComponent },
  { path: 'barChart', component: BarChartComponent },
  { path: 'bar-chart-ii', component: BarChartIiComponent },
  { path: '3-d-scatterPlot', component: ThreeDScatterPlotComponent },
  { path: '3-d-rotation', component: ThreeDRotationComponent },
  { path: '3-d-annotation', component: ThreeDAnnotationComponent },
  { path: '3-d-tooltip', component: ThreeDTooltipComponent },
  { path: '3-d-tooltip', component: ThreeDTooltipComponent },
  { path: 'stacked-bar-chart', component: StackedBarChartComponent },
  { path: 'highlight-bar-chart', component: HighlightBarchartComponent },
  { path: 'custom-tooltip', component: CustomTooltipComponent },
  { path: 'stock-chart', component: StockChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'line-chart-api-data', component: LineChartApiDataComponent },
  { path: 'stacked-column-popup', component: ColumnPopupComponent },
  { path: 'pie-chart-slice', component: PieChartSliceComponent },
  { path: 'bubble-chart', component: BubbleChartComponent },
  { path: 'bubble-chart-ii', component: BubbleChartIiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
