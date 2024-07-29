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

 editRow(data: any) {
    if (data.isEdit) {
      // Save the edited data (you may also send the edited data to a server here)
      data.isEdit = false;
    } else {
      // Enable editing mode
      data.isEdit = true;
    }
  }

  deleteRow(index: number) {
    this.receivedData.splice(index, 1);
  }
}
