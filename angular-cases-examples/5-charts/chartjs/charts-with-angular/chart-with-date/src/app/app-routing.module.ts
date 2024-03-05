import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashRiskTrendComponent } from './components/crash-risk-trend/crash-risk-trend.component';
import { MultipleChartComponent } from './components/multiple-chart/multiple-chart.component';
import { MultipleChartViewchildComponent } from './components/multiple-chart-viewchild/multiple-chart-viewchild.component';

const routes: Routes = [
  {path:'',redirectTo:'crashRiskTrend', pathMatch: 'full' },
  { path: 'crashRiskTrend', component: CrashRiskTrendComponent },
  { path: 'multipleChart', component: MultipleChartComponent },
  { path: 'multipleChartViewChild', component: MultipleChartViewchildComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
