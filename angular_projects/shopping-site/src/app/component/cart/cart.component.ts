import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // to use the api service inject it to the constructor
  constructor(private cartService:CartService) { }
  public cartItems:any=[];  
  public grandTotal:number=0;
  ngOnInit(): void {
    // this.cartItems=this.cartService.cartItemList;
    // console.log("this.cartItems",this.cartItems)
    this.cartService.getProductsService().subscribe(res=>{
      this.cartItems=res;
      this.grandTotal=this.cartService.getTotalPriceService();
    })
  }
  // remove item from cart
  removeItemFromCart(item:any){
    this.cartService.removeCartItemService(item);
  }
  // emptycart
  emptyAllCartItems(){
    this.cartService.removeAllCartItemsService();
  }
}
