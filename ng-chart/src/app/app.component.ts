import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-chart';
  result:any;
  coinPrice:any;
  coinName:any;
  chart:any=[];

  constructor(private _service:AuthService){
    // register chart
    Chart.register(...registerables);
  }

  ngOnInit(){
    this._service.cryptoData().subscribe((res)=>{
      this.result=res;
      console.log("this.result",this.result);
      this.coinPrice=this.result.data.coins.map((coin:any)=>coin.price);
      this.coinName=this.result.data.coins.map((coin:any)=>coin.name);

      console.log("this.coinPrice",this.coinPrice);
      console.log("this.coinName",this.coinName);

      // show chart data
      this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels:this.coinName,
          datasets:[
            {
              label:"Coin Price",
              data:this.coinPrice,
              borderWidth:1,
              fill:false,
              backgroundColor:'rgba(93,175,89,0.1)',
              borderColor:"#3e95cd"
            }
          ]
        }
      })
    })
  }
}
