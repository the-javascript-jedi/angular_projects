import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData={
    email:'',
    password:''
  };
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("loginUserData",this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe({
      next:(response)=>{
        console.log("response-loginUser",response);
      },
      error:(error)=>{
        console.log("error-loginUser",error);
      }
    })
  }
}
