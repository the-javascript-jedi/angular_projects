import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HelloHighChartsComponent} from './hello-high-charts/hello-high-charts.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ThreeDScatterPlotComponent} from './three-d-scatter-plot/three-d-scatter-plot.component';
import {ThreeDRotationComponent} from './three-d-rotation/three-d-rotation.component';
import {ThreeDAnnotationComponent} from './three-d-annotation/three-d-annotation.component';
import {BarChartIiComponent} from './bar-chart-ii/bar-chart-ii.component';

const routes: Routes = [
  {path:'',redirectTo:'helloHighChart', pathMatch: 'full' },
  { path: 'helloHighChart', component: HelloHighChartsComponent },
  { path: 'barChart', component: BarChartComponent },
  { path: 'bar-chart-ii', component: BarChartIiComponent },
  { path: '3-d-scatterPlot', component: ThreeDScatterPlotComponent },
  { path: '3-d-rotation', component: ThreeDRotationComponent },
  { path: '3-d-annotation', component: ThreeDAnnotationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
