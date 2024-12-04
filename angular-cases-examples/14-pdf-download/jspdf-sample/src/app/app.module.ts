import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfOneComponent } from './pdf-one/pdf-one.component';
import { PdfTwoComponent } from './pdf-two/pdf-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfOneComponent,
    PdfTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
