import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getChartInformation(){
    return this.http.get<any>("http://localhost:5000/coins").pipe(map((res:any)=>{
      // console.log("res",res)
      return res;
    }))
  }
}
