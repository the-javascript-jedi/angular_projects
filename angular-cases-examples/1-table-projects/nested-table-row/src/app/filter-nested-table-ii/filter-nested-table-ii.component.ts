import { Component, OnInit } from '@angular/core';
import {dataFromApiTS_ii} from "../../data/dummyData_ii"

@Component({
  selector: 'app-filter-nested-table-ii',
  templateUrl: './filter-nested-table-ii.component.html',
  styleUrls: ['./filter-nested-table-ii.component.scss']
})
export class FilterNestedTableIiComponent implements OnInit {

  constructor() { }
  dataFromAPIS:any; 
  filteredData:any;
  searchTerm = '';
  ngOnInit(): void {
     this.dataFromAPIS=dataFromApiTS_ii.data_ii;
    this.dataFromAPIS.forEach((dataRow,index) => {
      // create a search term from outer level elements
      dataRow.OuterSearchTerm=dataRow.match_percentage+dataRow.sr_affected_pid+dataRow.sr_description+dataRow.sr_last_updated+dataRow.sr_number+dataRow.sr_resolution
      dataRow.cdets_info.forEach((val,i)=>{
        // Insert the search term from outer level elements inside the inner level search value
        let text=dataRow.OuterSearchTerm+val.bug_last_updated+val.cdets_id+val.cdets_link+val.cdets_title+val.cdets_affected_pf.join("")+val.cdets_affected_sf.join("");
        val.InnerSearchTerm=text.toLowerCase();
      })      
    });
    this.filteredData = this.dataFromAPIS;
    console.log("this.dataFromAPIS_ii",this.dataFromAPIS);
  }
 search(e){
    let searchText=e.target.value.toLowerCase();
    console.log("searchText",searchText);
    const filteredData = this.dataFromAPIS
  .filter((d) =>
    d.cdets_info.some((b) => b.InnerSearchTerm.toLowerCase().includes(searchText.toLowerCase()))
  )
  .map((d) => ({
    ...d,
    cdets_info: d.cdets_info.filter((b) =>
      b.InnerSearchTerm.toLowerCase().includes(searchText.toLowerCase())
    ),
  }));
console.log("filteredData",filteredData)  
    this.filteredData = filteredData;
  }
}
