import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfOneComponent } from './pdf-one/pdf-one.component';
import { PdfTwoComponent } from './pdf-two/pdf-two.component';
import { PdfThreeComponent } from './pdf-three/pdf-three.component';
import { PdfFourComponent } from './pdf-four/pdf-four.component';
import { PdfFiveComponent } from './pdf-five/pdf-five.component';
import { CanvasPdfOneComponent } from './canvas-pdf-parent-one/canvas-pdf-one/canvas-pdf-one.component';
import { CanvasPdfParentOneComponent } from './canvas-pdf-parent-one/canvas-pdf-parent-one.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfOneComponent,
    PdfTwoComponent,
    PdfThreeComponent,
    PdfFourComponent,
    PdfFiveComponent,
    CanvasPdfOneComponent,
    CanvasPdfParentOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
