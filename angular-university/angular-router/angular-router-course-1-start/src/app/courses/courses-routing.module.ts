import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    // this route specifies the child routes inside main routing module
    // '' is /courses 
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class CoursesRoutingModule { }