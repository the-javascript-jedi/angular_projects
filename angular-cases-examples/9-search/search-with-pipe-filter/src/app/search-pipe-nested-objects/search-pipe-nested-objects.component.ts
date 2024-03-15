import { Component, OnInit } from '@angular/core';
import {dataFromApiTS} from "./data/dummyDataForSort";

@Component({
  selector: 'app-search-pipe-nested-objects',
  templateUrl: './search-pipe-nested-objects.component.html',
  styleUrls: ['./search-pipe-nested-objects.component.scss']
})
export class SearchPipeNestedObjectsComponent implements OnInit {

  constructor() { }
  searchText: string = '';
  tableData:any=[];
  ngOnInit(): void {
    console.log("dataFromApiTS",dataFromApiTS)
    this.tableData=dataFromApiTS.data;
  }

}
