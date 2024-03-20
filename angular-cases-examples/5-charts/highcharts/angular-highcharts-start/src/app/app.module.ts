import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HelloHighChartsComponent } from './hello-high-charts/hello-high-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ThreeDScatterPlotComponent } from './three-d-scatter-plot/three-d-scatter-plot.component';
import { ThreeDRotationComponent } from './three-d-rotation/three-d-rotation.component';
import { ThreeDAnnotationComponent } from './three-d-annotation/three-d-annotation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BarChartIiComponent } from './bar-chart-ii/bar-chart-ii.component';
import { ThreeDTooltipComponent } from './three-d-tooltip/three-d-tooltip.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { HighlightBarchartComponent } from './highlight-barchart/highlight-barchart.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
// API Call
import { HttpClientModule } from '@angular/common/http';
import { LineChartApiDataComponent } from './line-chart-api-data/line-chart-api-data.component';
import { ColumnPopupComponent } from './column-popup/column-popup.component';
import { ColumnViewAllComponent } from './column-popup/column-view-all/column-view-all.component';
import { PieChartSliceComponent } from './pie-chart-slice/pie-chart-slice.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BubbleChartIiComponent } from './bubble-chart-ii/bubble-chart-ii.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloHighChartsComponent,
    BarChartComponent,
    ThreeDScatterPlotComponent,
    ThreeDRotationComponent,
    ThreeDAnnotationComponent,
    BarChartIiComponent,
    ThreeDTooltipComponent,
    StackedBarChartComponent,
    HighlightBarchartComponent,
    CustomTooltipComponent,
    StockChartComponent,
    LineChartComponent,
    LineChartApiDataComponent,
    ColumnPopupComponent,
    ColumnViewAllComponent,
    PieChartSliceComponent,
    BubbleChartComponent,
    BubbleChartIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
