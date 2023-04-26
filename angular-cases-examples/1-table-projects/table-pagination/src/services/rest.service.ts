import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from 'src/models/Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url:string="http://localhost:3000/Users";

  getUsers(){
    return this.http.get<Users[]>(this.url);
  }

  constructor(private http:HttpClient) { 
  }
}
