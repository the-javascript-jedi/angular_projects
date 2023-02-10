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

@NgModule({
  declarations: [
    AppComponent,
    HelloHighChartsComponent,
    BarChartComponent,
    ThreeDScatterPlotComponent,
    ThreeDRotationComponent,
    ThreeDAnnotationComponent,
    BarChartIiComponent,
    ThreeDTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
