import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SelectOneComponent } from './select-one/select-one.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectOneComponent,
    MultiSelectComponent,
    SelectFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
