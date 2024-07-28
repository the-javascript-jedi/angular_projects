import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent {
  receivedData: any =[];
  constructor(private sharedData:SharedServiceService){

  }

  ngOnInit(){
    
    this.sharedData.data$.subscribe(data => {
      console.log("Page Loaded",this.receivedData);
      if(data){
        this.receivedData.push(data);
      }
      
    });
  }


}
