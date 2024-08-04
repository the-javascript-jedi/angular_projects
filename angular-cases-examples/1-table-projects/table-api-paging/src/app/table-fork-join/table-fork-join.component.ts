import { Component, OnInit } from '@angular/core';
import {TableMergeApiService} from '../services/table-merge-api.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-table-fork-join',
  templateUrl: './table-fork-join.component.html',
  styleUrls: ['./table-fork-join.component.scss']
})
export class TableForkJoinComponent implements OnInit {

   constructor(private _mergeApiService:TableMergeApiService) { }

  userTableData$:any;
  ngOnInit(): void {
    let postId=2;
     this.loadTableData(postId)
  }

  loadTableData(postId){  
   this.userTableData$ = forkJoin<any>({
      userDetails:this._mergeApiService.loadUsers(postId),
      postDetails:this._mergeApiService.loadPosts(postId)
    }).pipe(map(mapVal=>{
      const mergedObj = { ...mapVal['userDetails'], ...mapVal['postDetails'] };
      console.log("mergedObj",mergedObj);
      return mergedObj;
    }))
  }

}
