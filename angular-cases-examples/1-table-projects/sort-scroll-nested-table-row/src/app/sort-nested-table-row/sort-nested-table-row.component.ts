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
 
  tableHeaders=[{
    columnName:"cdets_id",
    sortable:false,
    sortDirection:""
  },{
    columnName:"bug_last_updated",
    sortable:true,
    sortDirection:""
  },{
    columnName:"cdets_link",
    sortable:false,
    sortDirection:""
  },{
    columnName:"cdets_title",
    sortable:false,
    sortDirection:""
  },
  {
    columnName:"sr_id",
    sortable:false,
    sortDirection:""
  },
  {
    columnName:"sr_title",
    sortable:false,
    sortDirection:""
  },
  {
    columnName:"match_percentage",
    sortable:true,
    sortDirection:""
  }]

   ngOnInit(): void {
     this.dataFromAPIS=dataFromApiTS.data;
      this.filteredData=dataFromApiTS.data;
      this.dataFromAPIS.forEach(val=>{
        val['readableDate']=dayjs(val.bug_last_updated).toDate();
        val['convertedDate']=dayjs(val.bug_last_updated).toDate().getTime();
        // calculate average match percentage
        let avgMatchPercentage=val.sr_data.reduce(function (acc, obj) { return acc + obj.match_percentage; }, 0)
        val['sumAvgTotalMatch']=avgMatchPercentage/val.sr_data.length;
        // var result = arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
      })
      console.log("this.dataFromAPIS",this.dataFromAPIS);
   }
 
  sortTable(headerColumn,sortType) {
    console.log("headerColumn",headerColumn)
    console.log("sortType",sortType);
    this.tableHeaders.forEach(val=>val.sortDirection="")
    let property='';
    if(headerColumn==="bug_last_updated"){
      property="convertedDate";  
    }
    else if(headerColumn==="match_percentage"){
      property="sumAvgTotalMatch";     
    }else{
      property=headerColumn
    }
    const direction = sortType=="desc" ? 1 : -1;
    console.log("direction",direction)
    this.filteredData=this.filteredData.sort((a, b) => {
          if (a[property] < b[property]) {
            return -1 * direction;
          } else if (a[property] > b[property]) {
            return 1 * direction;
          } else {
            return 0;
          }
        });
  }
   
}
