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
  // searchTerm = '';
  constructor() { }

  ngOnInit(): void {
    this.dataFromAPIS=dataFromApiTS.data;
    
    this.dataFromAPIS.forEach((dataRow,index) => {
      // console.log("dataRow",dataRow);
      dataRow.isExpanded = false;
      // create a search term from outer level elements
      dataRow.OuterSearchTerm=dataRow.cdetsInfo.bug_last_updated+dataRow.cdetsInfo.cdets_id+dataRow.cdetsInfo.cdets_title+dataRow.cdetsInfo.cdets_affected_pf.join(" ")     
      dataRow.cdetsTableInfo.forEach((val,i)=>{
        // Insert the search term from outer level elements inside the inner level search value
        let text=val.match_percentage+val.sr_affected_pid+val.sr_description+val.sr_last_update+val.sr_number+val.sr_resolution_summary+val.sr_symptoms+val.sr_affected_pf.join(" ")+val.sr_affected_sw.join(" ");
        val.InnerSearchTerm=text.toLowerCase()
      })      
    });
    this.filteredData = this.dataFromAPIS;
    console.log("this.dataFromAPIS",this.dataFromAPIS);
  }

  search(e){
    let searchText=e.target.value.toLowerCase();
    console.log("searchText",searchText);
    //  console.log("this.dataFromAPIS",this.dataFromAPIS);
const filteredData = this.dataFromAPIS
  .filter((d) =>
    d.cdetsTableInfo.some((b) => b.InnerSearchTerm.toLowerCase().includes(searchText.toLowerCase()))
  )
  .map((d) => ({
    ...d,
    cdetsTableInfo: d.cdetsTableInfo.filter((b) =>
      b.InnerSearchTerm.toLowerCase().includes(searchText.toLowerCase())
    ),
  }));
console.log("filteredData",filteredData)  
    this.filteredData = filteredData;
}

}
