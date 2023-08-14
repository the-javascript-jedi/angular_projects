import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableNestedRowComponent } from './table-nested-row/table-nested-row.component';
import { FilterNestedTableComponent } from './filter-nested-table/filter-nested-table.component';
import { FormsModule } from '@angular/forms';
import { FilterNestedTableIiComponent } from './filter-nested-table-ii/filter-nested-table-ii.component';

@NgModule({
  declarations: [
    AppComponent,
    TableNestedRowComponent,
    FilterNestedTableComponent,
    FilterNestedTableIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
