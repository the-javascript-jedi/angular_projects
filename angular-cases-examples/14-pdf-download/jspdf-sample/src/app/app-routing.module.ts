import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfOneComponent } from './pdf-one/pdf-one.component';

const routes: Routes = [
  {path:"pdf_one",component:PdfOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
