import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEmployee } from './Model/Employee';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mat-table-ii';
  displayedColumns: string[] = ['code', 'name', 'email', 'designation' ,'action'];
  empData:any;
  dataSource:any;
  // pagination
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  // sorting
  @ViewChild(MatSort) matSort!:MatSort;
  constructor(private service:MasterService){

  }
  ngOnInit(): void {
    this.GetAll();
  }
  GetAll(){
    this.service.GetEmployee().subscribe(result=>{
      this.empData=result;
      this.dataSource=new MatTableDataSource<IEmployee>(this.empData);
      // specify the paginator for the data source
      this.dataSource.paginator=this.paginator;
      // specify the sort for the data source
      this.dataSource.sort=this.matSort;
    })
  }
  // Input filter event
  Filterchange(event:Event){
    const filValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filValue;
  }
  // get clicked row
  getrow(row:any){
    console.log("clicked row",row);
  }
  FunctionEdit(code:any){
    console.log("clicked button",code);
  }
}
