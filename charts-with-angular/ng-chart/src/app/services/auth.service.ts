import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

const apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService { 
  private apiUrl="http://localhost:5000/coins";
  constructor(private http: HttpClient) {}
  cryptoData(){
    return this.http.get<any>("http://localhost:5000/coins").pipe(map((res:any)=>{
      // console.log("res",res)
      return res;
    }))
  }
  
}