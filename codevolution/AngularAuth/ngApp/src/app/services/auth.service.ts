import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:5000/api/register";
  private _loginUrl="http://localhost:5000/api/login";

  constructor(private http:HttpClient,private _router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user);
  }

  loggedIn(){
    // double negate to return true or false if token exists
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }
}
