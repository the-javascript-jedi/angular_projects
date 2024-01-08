import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    // private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    // this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
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