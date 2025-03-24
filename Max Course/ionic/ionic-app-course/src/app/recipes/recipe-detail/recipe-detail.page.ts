import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone:false
})
export class RecipeDetailPage implements OnInit {
 loadedRecipe: Recipe | null = null; // Allow null values
 
 constructor(private activatedRoute:ActivatedRoute,private recipesService:RecipesService) { }
 
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        // redirect
        return;
      }
      const recipeId=paramMap.get('recipeId');
      if(recipeId){
        this.loadedRecipe=this.recipesService.getRecipe(recipeId);
      }
    })
  }

}
