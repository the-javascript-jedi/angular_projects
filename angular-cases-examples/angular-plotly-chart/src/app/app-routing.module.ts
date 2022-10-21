import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotlyChartComponent } from './plotly-chart/plotly-chart.component';
import { GraphComponent } from './graph/graph.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

const routes: Routes = [
  { path: 'chart_1', component: PlotlyChartComponent },
  { path: 'chart_2', component: GraphComponent },
  { path: 'chart_3', component: ScatterChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
