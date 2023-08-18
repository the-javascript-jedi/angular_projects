import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableWithGraphComponent } from './table-with-graph/table-with-graph.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggingInterceptorServce } from './services/logging-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TableWithGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // for angular interceptors we also need to specify in the provider
    // for multiple interceptors order of hierarchy is important
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      // multiple interceptors can be executed
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoggingInterceptorServce,
      // multiple interceptors can be executed
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
