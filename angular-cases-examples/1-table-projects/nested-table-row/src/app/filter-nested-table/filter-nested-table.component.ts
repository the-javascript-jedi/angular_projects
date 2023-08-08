import { Component, OnInit } from '@angular/core';
import {dataFromApiTS} from "../../data/dummyData"


@Component({
  selector: 'app-filter-nested-table',
  templateUrl: './filter-nested-table.component.html',
  styleUrls: ['./filter-nested-table.component.scss']
})
export class FilterNestedTableComponent implements OnInit {
  dataFromAPIS:any;
  filteredData:any;
  searchTerm = '';
  constructor() { }

  ngOnInit(): void {
    this.dataFromAPIS=dataFromApiTS.data;
    
    this.dataFromAPIS.forEach((dataRow,index) => {
      console.log("dataRow",dataRow);
      dataRow.isExpanded = false;
      dataRow.OuterSearchTerm=dataRow.cdetsInfo.bug_last_updated+dataRow.cdetsInfo.cdets_id+dataRow.cdetsInfo.cdets_title+dataRow.cdetsInfo.cdets_affected_pf.join(" ")     
      dataRow.cdetsTableInfo.forEach((val,i)=>{
        let text=val.match_percentage+val.sr_affected_pid+val.sr_description+val.sr_last_update+val.sr_number+val.sr_resolution_summary+val.sr_symptoms+dataRow.OuterSearchTerm
        val.InnerSearchTerm=text.toLowerCase()
      })      
    });

    this.filteredData = this.dataFromAPIS;
    console.log("this.dataFromAPIS",this.dataFromAPIS);
  }

  search(e){
    let searchText=e.target.value
    console.log("searchText",searchText);
     console.log("this.dataFromAPIS",this.dataFromAPIS);
// const searchText = 'book 2';
// const filteredData = this.dataFromAPIS.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()));
// const searchText = 'book 2';
const filteredData = this.dataFromAPIS.filter(d => d.cdetsTableInfo.some(b => b.InnerSearchTerm.toLowerCase().includes(searchText.toLowerCase())));
console.log("filteredData",filteredData);
this.filteredData=filteredData
  }

  // searchRow(row, searchTerm) {
  //   console.log("row",row)
  //   console.log("searchTerm",searchTerm)
  //   for (let key in row) {
  //       let value = row[key];
  //       if (Array.isArray(value)) {
  //           for (let i = 0; i < value.length; i++) {
  //               if (this.searchRow(value[i], searchTerm)) {
  //                   return true;
  //               }
  //           }
  //       } else if (typeof value === 'object') {
  //           if (this.searchRow(value, searchTerm)) {
  //               return true;
  //           }
  //       } else if (typeof value === 'string' && value.includes(searchTerm)) {
  //           return true;
  //       }
  //   }
  //   return false;
  // }

}
// val[i].searchTerm=val[i].match_percentage+val[i].sr_affected_pid+val[i].sr_description+val[i].sr_last_update+val[i].sr_number+val[i].sr_resolution_summary+val[i].sr_symptoms