import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotlyChartComponent } from './plotly-chart/plotly-chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { GraphComponent } from './graph/graph.component';
import { ThreeDScatterComponent } from './three-d-scatter/three-d-scatter.component';
import { ThreeDScatterMultipleComponent } from './three-d-scatter-multiple/three-d-scatter-multiple.component';
import { PlotyAnnotationComponent } from './ploty-annotation/ploty-annotation.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyChartComponent,
    ScatterChartComponent,
    GraphComponent,
    ThreeDScatterComponent,
    ThreeDScatterMultipleComponent,
    PlotyAnnotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
