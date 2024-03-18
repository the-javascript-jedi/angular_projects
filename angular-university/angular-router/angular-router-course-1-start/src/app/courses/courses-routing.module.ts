import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from '../services/course.resolver';


const routes: Routes = [
  {
    // this route specifies the child routes inside main routing module
    // '' is /courses 
    path:'',
    component:HomeComponent
  },
  {
    path:':courseUrl',
    component:CourseComponent,
    // apply resolver to particular route 
    resolve:{
      // This will indicate to the angular router that before displaying the course component, we need to first fetch a course property using this course resolver. The course component could potentially need here multiple properties, each one resolved by its special separate resolver.
      course:CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver
  ]
})
export class CoursesRoutingModule { }