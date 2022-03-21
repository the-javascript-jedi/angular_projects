import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // POST
  postEmployeeService(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((response:any)=>{
      return response;
    }))
  }
  // GET
  getEmployeeService(){
    return this._http.get<any>("http://localhost:3000/posts")
    .pipe(map((response:any)=>{
      return response;
    }))
  }
  // UPDATE/PUT
  updateEmployeeService(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts"+id,data)
    .pipe(map((response:any)=>{
      return response;
    }))
  }
  // DELETE
  deleteEmployeeService(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
