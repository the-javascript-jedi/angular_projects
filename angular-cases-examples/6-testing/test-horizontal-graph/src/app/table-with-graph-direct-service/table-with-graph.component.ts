import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {    
    map,    
} from 'rxjs/operators';
// https://math.stackexchange.com/questions/2089295/converting-numbers-to-percentage
@Component({
  selector: 'app-table-with-graph-direct-service',
  templateUrl: './table-with-graph.component.html',
  styleUrls: ['./table-with-graph.component.scss']
})
export class TableWithGraphComponentDirectService implements OnInit {
  dataResponse:any=[]
  tableData=[];
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this.loadResponse();
  }
calculateBorderColor(colorValue){
  if(colorValue==="positive"){
    return '1px solid green';
  }else{
    return '1px solid red';
  }
}
  loadResponse(){
    this._http.get<any>(`http://localhost:5000/api/games?&filter=&pageSize=100`).pipe().subscribe({
      next:((res)=>{
        this.dataResponse=res['responseDataFromAPI'];
        // check whether number is positive or negative and add a flag
        this.dataResponse.forEach(val=>{
          if(val.contribution>0){
            val.bar_direction="positive"
          }else{
            val.bar_direction="negative"
          }
        })
        // change negative values to positive
        // const positiveData = this.dataResponse.map( s => Math.abs(s.contribution));
        const positiveData = this.dataResponse.map(val=>{
           val.contribution=Math.abs(val.contribution)
          return val;
        });
        console.log("positiveData",positiveData);
        // find maximum value and use to calculate the percentage of numbers to 100
        // var max = Math.max.apply(Math, this.dataResponse.contribution); // picks out 5000
        // find the maximum value and make it as 100% based on that highest value assign percentage to all values
        const maxPeak = positiveData.reduce((p, c) => p.contribution > c.contribution ? p : c);
        console.log("maxPeak",maxPeak)
        var percents = positiveData.map(function(n){
           n.percentageValue=(n.contribution/maxPeak.contribution) * 100.0
           return n
        });

        this.tableData=percents;
        // console.log("this.tableData",this.tableData);
      })
    })

  }
}
