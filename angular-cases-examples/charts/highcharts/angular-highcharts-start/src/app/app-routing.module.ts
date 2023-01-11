import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HelloHighChartsComponent} from './hello-high-charts/hello-high-charts.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ThreeDScatterPlotComponent} from './three-d-scatter-plot/three-d-scatter-plot.component';
import {ThreeDRotationComponent} from './three-d-rotation/three-d-rotation.component';


const routes: Routes = [
  { path: 'helloHighChart', component: HelloHighChartsComponent },
  { path: 'barChart', component: BarChartComponent },
  { path: 'three-d-scatterPlot', component: ThreeDScatterPlotComponent },
  { path: 'three-d-rotation', component: ThreeDRotationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
