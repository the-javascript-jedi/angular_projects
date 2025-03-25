import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute,Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone:false
})
export class RecipeDetailPage implements OnInit {
 loadedRecipe: Recipe | null = null; // Allow null values
 
 constructor(private activatedRoute:ActivatedRoute,private recipesService:RecipesService,private router:Router,private alertCtrl:AlertController) { }
 
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        // redirect if no recipeId is available
         this.router.navigate(['/recipes']);
      }
      const recipeId=paramMap.get('recipeId');
      if(recipeId){
        this.loadedRecipe=this.recipesService.getRecipe(recipeId);
      }
    })
  }

onDeleteRecipe(recipeId?: string) {
  this.alertCtrl.create({
    header: 'Are you sure?',
    message: 'Do you really want to delete the recipe?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
           if (recipeId) {
              console.log('onDeleteRecipe', recipeId);
              this.recipesService.deleteRecipe(recipeId);
              this.router.navigate(['/recipes']);
          }
        }
      }
    ]
  }).then(alertEl => {
    alertEl.present();
  })
 
}

}
