import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiurl="http://localhost:5000/customerData";
  constructor(private http:HttpClient) {

   }

   GetEmployee():Observable<IEmployee>{
    return this.http.get<any>(this.apiurl).pipe(
    map(res=>{
        console.log("res",res)
        return res['data'];
      }
    )
    )
   }
}
