import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HelloHighChartsComponent } from './hello-high-charts/hello-high-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ThreeDScatterPlotComponent } from './three-d-scatter-plot/three-d-scatter-plot.component';
import { ThreeDRotationComponent } from './three-d-rotation/three-d-rotation.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloHighChartsComponent,
    BarChartComponent,
    ThreeDScatterPlotComponent,
    ThreeDRotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }