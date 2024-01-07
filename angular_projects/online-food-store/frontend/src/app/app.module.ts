import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
// IMPORT STAR RATING MODULE
import { StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
