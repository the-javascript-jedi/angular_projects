import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomePage } from './home/home.page';

const routes: Routes = [
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: HomePage,
  // },

  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
