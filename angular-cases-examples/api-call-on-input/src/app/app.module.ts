import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { FilterCheckComponent } from './filter-check/filter-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { SearchWithMenuComponent } from './search-with-menu/search-with-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterSearchComponent,
    FilterCheckComponent,
    FilterDropdownComponent,
    SearchWithMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
