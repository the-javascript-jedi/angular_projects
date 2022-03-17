import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  isLoading=true;
  // to use the api service inject it
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      if(this.productList.length>0){
        this.isLoading=false;
      }
      console.log("this.productList",this.productList)
    })
  }

}
