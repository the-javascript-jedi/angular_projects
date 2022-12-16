import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { TablePageComponent } from './table-page/table-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
