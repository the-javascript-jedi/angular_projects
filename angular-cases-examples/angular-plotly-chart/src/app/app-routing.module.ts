import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotlyChartComponent } from './plotly-chart/plotly-chart.component';
import { GraphComponent } from './graph/graph.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { ThreeDScatterComponent } from './three-d-scatter/three-d-scatter.component';

const routes: Routes = [
  { path: 'chart_1', component: PlotlyChartComponent },
  { path: 'chart_2', component: GraphComponent },
  { path: 'chart_3', component: ScatterChartComponent },
  { path: 'chart_5', component: ThreeDScatterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
