import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData={
    email:'',
    password:''
  };
  constructor(private _auth:AuthService,private _router:Router) { }

  registerUser(){
    console.log("this.registerUserData",this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe({
      next:(response)=>{
        console.log("response-registerUser",response);
        localStorage.setItem('token',response.token);
        this._router.navigate(['/special']);
      },
      error:(error)=>{
        console.log("error-registerUser",error);
      }
    })
  }
  ngOnInit(): void {
  }

}
