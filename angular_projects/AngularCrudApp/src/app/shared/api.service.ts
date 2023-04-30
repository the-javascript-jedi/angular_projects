import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
