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
   /*Existing Code--starts*/
  //  this.cartItemList.push(product);
  //    // this data will be passed wherever it is subscribed
  //   this.productListBehaviourSub.next(this.cartItemList);
  //   // take values and total the values
  //   this.getTotalPriceService();
  /*Existing Code--Ends*/
    // check if product is already present in cart
    let alreadyExisting = this.cartItemList.find((val:any) => val.id == product.id);       
    if(alreadyExisting!==undefined){    
      // if item already present in cart increase the quaantity
      alreadyExisting.quantity=alreadyExisting.quantity+1;
      alreadyExisting.total=alreadyExisting.price*alreadyExisting.quantity;
      //find the existing product and remove it from the array
      var existingId=this.cartItemList.findIndex((val:any)=>val.id==alreadyExisting.id);     
      var changedData=this.cartItemList.splice(existingId, 1);
      //add the new product with correct quantity 
      this.cartItemList.push(...changedData);
    }else{
      this.cartItemList.push(product);
    }
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
