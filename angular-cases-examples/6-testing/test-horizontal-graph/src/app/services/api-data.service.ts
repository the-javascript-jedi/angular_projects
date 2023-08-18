import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _http:HttpClient) { }

  getHorizontalTableData(pageSize){
    let url=`http://localhost:5000/api/games?&pageSize=${pageSize}`;
    return this._http.get<any[]>(url).pipe(share());
  }
}
