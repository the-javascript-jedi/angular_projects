import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfOneComponent } from './pdf-one/pdf-one.component';
import { PdfTwoComponent } from './pdf-two/pdf-two.component';
import { PdfThreeComponent } from './pdf-three/pdf-three.component';
import { PdfFourComponent } from './pdf-four/pdf-four.component';
import { PdfFiveComponent } from './pdf-five/pdf-five.component';
import { CanvasPdfParentOneComponent } from './canvas-pdf-parent-one/canvas-pdf-parent-one.component'; 

const routes: Routes = [
  {path:"pdf_one",component:PdfOneComponent},
  {path:"pdf_two",component:PdfTwoComponent},
  {path:"pdf_three",component:PdfThreeComponent},
  {path:"pdf_four",component:PdfFourComponent},
  {path:"pdf_five",component:PdfFiveComponent},
  {path:"pdf_canvas_one",component:CanvasPdfParentOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
