import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {dataFromApiTS} from "../../data/dummyData"

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit,AfterViewInit  {
  tableDataSource = new MatTableDataSource<any>([]); // <-- STEP (1)
  tableDataCount:number=0;
  loading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator; // <-- STEP (3)
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['seqNo', "description", "category"];
  expandedLesson: any = null;

  ngOnInit() {
    this.loadTableData();// <-- STEP (4)
  }

  ngAfterViewInit() {
    console.log("this.sort",this.sort);
    // <-- STEP (5)
    this.tableDataSource.paginator = this.paginator;
  }

  loadTableData(){
    let dataForTable=dataFromApiTS.HALO_GAMES
    this.tableDataSource.data=dataForTable;// <-- STEP (2)
    this.tableDataCount=dataForTable.length;
  }

  onToggleLesson(lesson){
    if (lesson == this.expandedLesson) {
      this.expandedLesson = null;
    }
    else {
        this.expandedLesson = lesson;
    }
  }
}
