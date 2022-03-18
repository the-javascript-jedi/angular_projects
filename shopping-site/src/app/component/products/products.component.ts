import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  isLoading=true;
  // to use the api service inject it to the constructor
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      // add a quantity and total key to the object
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
      if(this.productList.length>0){
        this.isLoading=false;
      }
      console.log("this.productList",this.productList)
    })
  }
  addToCart(item:any){   
    this.cartService.addtoCartService(item);
  }
}
