import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { SelectScrollSearchComponent } from './select-scroll-search/select-scroll-search.component';
import { SelectScrollSearchIiComponent } from './select-scroll-search-ii/select-scroll-search-ii.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    SelectScrollSearchComponent,
    SelectScrollSearchIiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
