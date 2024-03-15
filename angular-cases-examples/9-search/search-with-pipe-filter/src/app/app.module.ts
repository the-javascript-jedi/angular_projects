import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchWithPipeComponent } from './search-with-pipe/search-with-pipe.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipeNestedObjectsComponent } from './search-pipe-nested-objects/search-pipe-nested-objects.component';
import { NestedObjectsearchPipe } from './pipes/nested-objectsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchWithPipeComponent,
    SearchPipe,
    SearchPipeNestedObjectsComponent,
    NestedObjectsearchPipe,
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
