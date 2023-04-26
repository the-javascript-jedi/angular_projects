import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableRowSpanComponent } from './table-row-span/table-row-span.component';
import { TableRowSpanDemoComponent } from './table-row-span-demo/table-row-span-demo.component';
import { TableMultipleRowGroupingComponent } from './table-multiple-row-grouping/table-multiple-row-grouping.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowSpanComponent,
    TableRowSpanDemoComponent,
    TableMultipleRowGroupingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
