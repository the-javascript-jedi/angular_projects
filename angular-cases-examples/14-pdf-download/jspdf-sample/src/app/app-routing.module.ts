import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfOneComponent } from './pdf-one/pdf-one.component';
import { PdfTwoComponent } from './pdf-two/pdf-two.component';
import { PdfThreeComponent } from './pdf-three/pdf-three.component';

const routes: Routes = [
  {path:"pdf_one",component:PdfOneComponent},
  {path:"pdf_two",component:PdfTwoComponent},
  {path:"pdf_three",component:PdfThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
