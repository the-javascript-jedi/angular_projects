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
