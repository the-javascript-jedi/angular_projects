import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { TablePageComponent } from './table-page/table-page.component';
import {TableMergeApiService} from './services/table-merge-api.service';
import { TableForkJoinComponent } from './table-fork-join/table-fork-join.component';
import { TableConcatMapComponent } from './table-concat-map/table-concat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent,
    TableForkJoinComponent,
    TableConcatMapComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TableMergeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
