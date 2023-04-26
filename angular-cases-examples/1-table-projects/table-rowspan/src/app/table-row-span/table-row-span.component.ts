import { Component, OnInit } from '@angular/core';
import {dataFromApiTS} from "../../data/dummyData"

@Component({
  selector: 'app-table-row-span',
  templateUrl: './table-row-span.component.html',
  styleUrls: ['./table-row-span.component.scss']
})
export class TableRowSpanComponent implements OnInit {
  constructor() { }
  dataFromAPIS:any;
  ngOnInit(): void {
    //  let arrayFromTS=dataFromApiTS;
    // console.log("arrayFromTS",arrayFromTS);
    // load data from apis
    this.dataFromAPIS=dataFromApiTS.data;
    console.log("this.dataFromAPIS",this.dataFromAPIS)
  }

}
