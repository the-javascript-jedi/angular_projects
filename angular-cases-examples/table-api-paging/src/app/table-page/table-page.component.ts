import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit{
  users:any;
  totalCount:number=0;
  paginationPageNo:number=0;
  paginationPageSize:number=5;
  loading:boolean=true;

  constructor(private _userService:UsersService){ }

  ngOnInit(): void {
    this.loadTableData('asc',this.paginationPageNo,this.paginationPageSize, 'seqNo');
    this.getUsersDataCount();
  }

  loadTableData(sortDirection,pageNumber,pageSize,sortOrder){
    this._userService.getUsers(sortDirection,pageNumber,pageSize,sortOrder).subscribe({
      next:(response:any)=>{
        console.log("response",response);
        this.users=response;
        this.loading=false;
      }
    })    
  }

  getUsersDataCount(){
    this._userService.getUsersCount().subscribe({
      next:(response:any)=>{
        this.totalCount=response['gamesPageCount'];
        console.log("this.totalCount",this.totalCount);
      }
    })
  }

  renderPage(event:number){
    this.loading=true;
    console.log("paginationPageNo",event);
    this.paginationPageNo=event;
    this.loadTableData('asc',this.paginationPageNo-1,this.paginationPageSize, 'seqNo');
  }
}
