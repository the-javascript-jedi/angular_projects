import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// routing config corresponds to a particular screen
const routes: Routes = [
  // root path - redirect to the courses path 
  // empty path will match everything so we need to add pathMatch:"full" to match path exactly
  {
    path:"",
    redirectTo:"/courses",
    pathMatch:"full"
  },
  {
    path:"courses",
    // all routes with courses/ are children of courses route
    loadChildren:()=>import('./courses/courses.module').then(m=>m.CoursesModule)
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    // ** - wildcard matches anything we type in the address bar
    // always wildcard put at end of routing module paths
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {

}