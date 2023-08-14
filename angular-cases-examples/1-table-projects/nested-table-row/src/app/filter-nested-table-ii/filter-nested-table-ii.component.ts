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
  ngOnInit(): void {
     this.dataFromAPIS=dataFromApiTS_ii.data_ii;
     console.log("this.dataFromAPIS",this.dataFromAPIS)
  }

}
