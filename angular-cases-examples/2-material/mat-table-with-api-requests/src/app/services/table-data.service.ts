import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http:HttpClient) { }

  findGamesData(sortOrder = 'asc',pageNumber = 0, pageSize = 3, sortColumn = 'seqNo'){
    return this.http.get('http://localhost:5000/api/searchTableWithPagination', {
        params: new HttpParams()
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
            .set('sortColumn', sortColumn)
    }).pipe(
        map((res) =>{
          console.log("res--findLessons",res);
          return res["gamesPage"];
         })
    );
  }

  findGamesDataCount(){
    return this.http.get('http://localhost:5000/api/searchTableCount')
  }
}
// private _tableData:TableDataService