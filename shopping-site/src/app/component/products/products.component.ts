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
  public filterCategory:any;
  searchKey:string="";
  isLoading=true;
  // to use the api service inject it to the constructor
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      // store the data in filterCategory
      this.filterCategory=res;
      // add a quantity and total key to the object
      this.productList.forEach((a:any)=>{
        // add a common category to the array value
        if(a.category==="women's clothing"||a.category==="men's clothing"){
          a.category="fashion";
        }
        Object.assign(a,{quantity:1,total:a.price})
      })
      if(this.productList.length>0){
        this.isLoading=false;
      }
      console.log("this.productList",this.productList)
    })
    // subscribe to the search term being typed in header component
  this.cartService.searchBehaviourSub.subscribe((val:any)=>{
    this.searchKey=val;
  })
  }
  addToCart(item:any){   
    this.cartService.addtoCartService(item);
  } 
  filterOnClickCategory(clickedCategory:string){
    this.filterCategory=this.productList.filter((productItem:any)=>{
      if(productItem.category==clickedCategory||clickedCategory==""){
        return productItem;
      }
    })
  } 
}
