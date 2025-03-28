import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone:false
})
export class RecipesPage implements OnInit {
  recipes:Recipe[]=[];
  constructor(private recipesService:RecipesService) {}
  ngOnInit() {
    this.recipes=this.recipesService.getAllRecipes();
  }
}