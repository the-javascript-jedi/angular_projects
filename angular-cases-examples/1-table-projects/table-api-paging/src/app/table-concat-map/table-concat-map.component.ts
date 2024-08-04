import { Component, OnInit } from '@angular/core';
import {TableMergeApiService} from '../services/table-merge-api.service';
import { concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-table-concat-map',
  templateUrl: './table-concat-map.component.html',
  styleUrls: ['./table-concat-map.component.scss']
})
export class TableConcatMapComponent implements OnInit {

  constructor(private _mergeApiService:TableMergeApiService) { }
  
  userTableData$:any;

   ngOnInit(): void {
    let postId=1; 
    this.loadTableData(postId)
  }

  loadTableData(postId){
    // api 1
    this.userTableData$=this._mergeApiService.loadUsers(postId).pipe(
      concatMap(userResponse=>{
        console.log("userResponse",userResponse)
        // api 2 using api1's result id
        return this._mergeApiService.loadPosts(userResponse['id']).pipe(map(val=>{
          console.log("val",val)
          // change the id
          val['id']="testId";
          return val;
        }))
      }
      )
    )
  }
}
