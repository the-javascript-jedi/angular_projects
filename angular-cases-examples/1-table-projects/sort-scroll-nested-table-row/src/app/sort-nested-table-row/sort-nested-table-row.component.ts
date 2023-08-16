import { Component } from '@angular/core';
import {dataFromApiTS} from "src/data/dummyDataForSort";
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-sort-nested-table-row',
  templateUrl: './sort-nested-table-row.component.html',
  styleUrls: ['./sort-nested-table-row.component.scss']
})
export class SortNestedTableRowComponent {
  dataFromAPIS:any; 
  filteredData:any;
 modifiedBy = 'last_updated';
  order = '';

   ngOnInit(): void {
     this.dataFromAPIS=dataFromApiTS.data;
      this.filteredData=dataFromApiTS.data;
      this.dataFromAPIS.forEach(val=>{
        val['convertedDate']=dayjs(val.bug_last_updated).toDate();
      })
      console.log("this.dataFromAPIS",this.dataFromAPIS);
   }
 sortBy(property, order) {
    this.modifiedBy = property;
    this.order = order;
    
    if (this.order === 'asc') {
      this.order = 'desc';
    } else {
      this.order = 'asc';
    }
  }
   
}
