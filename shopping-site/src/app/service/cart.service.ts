import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  // emit or subscribe value, observable act as a subscriber
  public productListBehaviourSub=new BehaviorSubject<any>([]);

  constructor() { }

  // get
  getProductsService(){
    return this.productListBehaviourSub.asObservable();
  }
  // set
  setProductService(product:any){
    // push the item to cartItemList
    this.cartItemList.push(...product);
    // this data will be passed wherever it is subscribed
    this.productListBehaviourSub.next(product);
  }

  addtoCartService(product:any){
    this.cartItemList.push(product);
     // this data will be passed wherever it is subscribed
    this.productListBehaviourSub.next(this.cartItemList);
    // take values and total the values
    this.getTotalPriceService();
  }
  //take values in cart and total all values
  getTotalPriceService():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      // get price of product
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartItemService(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
     // this data will be passed wherever it is subscribed
     this.productListBehaviourSub.next(this.cartItemList);
  }
  removeAllCartItemsService(){
    this.cartItemList=[];
    // this data will be passed wherever it is subscribed
    this.productListBehaviourSub.next(this.cartItemList);
  }
}
