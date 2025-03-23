import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomePage } from './home/home.page';

const routes: Routes = [
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {
    path: 'recipes',
    children:[
      {
        path:'',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
      },
      {
        path:':recipeId',
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
