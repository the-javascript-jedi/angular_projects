import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  url:string="http://localhost:3000/Users";

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.url);
  }
}