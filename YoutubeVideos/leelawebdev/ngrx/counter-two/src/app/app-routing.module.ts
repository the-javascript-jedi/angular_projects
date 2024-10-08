import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';


const routes: Routes = [
  {
    path:'posts',
    loadChildren:()=>import('./posts/post.module').then(m=>m.CounterModule)
  },
  {
    path:'counter',
    loadChildren:()=>import('./counter/counter.module').then(m=>m.CounterModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
