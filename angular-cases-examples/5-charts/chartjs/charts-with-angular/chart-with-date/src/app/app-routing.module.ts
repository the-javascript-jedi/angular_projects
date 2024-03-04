import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashRiskTrendComponent } from './components/crash-risk-trend/crash-risk-trend.component';
import { MultipleChartComponent } from './components/multiple-chart/multiple-chart.component';

const routes: Routes = [
  {path:'',redirectTo:'crashRiskTrend', pathMatch: 'full' },
  { path: 'crashRiskTrend', component: CrashRiskTrendComponent },
  { path: 'multipleChart', component: MultipleChartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
