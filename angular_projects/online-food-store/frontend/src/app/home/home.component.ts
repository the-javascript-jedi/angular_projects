import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[];

   constructor(private foodService: FoodService, private route: ActivatedRoute) { }


  ngOnInit(){
    // this.foods=this.foodService.getAll();
    this.route.params.subscribe(params=>{
      if(params.searchTerm){
        this.foods=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        // this.foods=this.foodService.getAll().filter(
        //   food=>DOMRectReadOnly.name.toLowerCase().includes(params.searchTerm.toLowerCase())
        // )
      }
      else if(params.tag){
        this.foods=this.foodService.getAllFoodsByTag(params.tag);
      }else{
        this.foods=this.foodService.getAll();
      }
    })
  }
 onClickResult: any;
  onHoverRatingChangeResult: any;
  onRatingChangeResult: any;

  onStarClick = ($event: any) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  };

  onStarRatingChange = ($event: any) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  };

  onStarHoverRatingChange = ($event: any) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  };
}
