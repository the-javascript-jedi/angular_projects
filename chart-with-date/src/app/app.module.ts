import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrashRiskTrendComponent } from './components/crash-risk-trend/crash-risk-trend.component';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CalendarComponent } from './components/crash-risk-trend/calendar/calendar.component';
import { ChartComponentComponent } from './components/crash-risk-trend/chart-component/chart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    CrashRiskTrendComponent,
    CalendarComponent,
    ChartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
