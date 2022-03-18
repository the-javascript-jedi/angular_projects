import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItems:number=0;
  constructor(private cartService:CartService) { }
  public searchTerm:string="";

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log("this.searchTerm=",this.searchTerm);
    // pass the data from header to service using abehaviour subject
    //we emit the data here
    this.cartService.searchBehaviourSub.next(this.searchTerm);
  }
  ngOnInit(): void {
    // total items in cart
    this.cartService.getProductsService().subscribe(res=>{
      console.log("res",res);
      const sumWithInitial = res.reduce(function (acc:any, obj:any) { return acc + obj.quantity; }, 0);  
      // this.totalItems=res.length;      
      this.totalItems=sumWithInitial;      
    })
  }
}
