import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  authForm=new FormGroup({
    username:new FormControl('',
    // non async validators are passed in second argument
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ],
    // async validators are passed as third argument
    // async validators will run only after non async validators are run(required,minLength,etc)
    [this.uniqueUsername.validate]
    ),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ],),
    passwordConfirmation:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ],)
  },{validators:[this.matchPassword.validate]}
  );
  constructor(
    private matchPassword:MatchPassword, 
    private uniqueUsername:UniqueUsername,
    private authService:AuthService
    ) { }
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    // old format
    // this.authService.signup(this.authForm.value).subscribe((response)=>{
    //     console.log("response",response);
    // });
    // new format
    this.authService.signup(this.authForm.value).subscribe({
      next:(response)=>{
        // Navigate to some other route

      },
      complete:()=>{
        // when request is completed
      },
      error:(err)=>{
        console.log("err",err);
        if(!err.status){
          // force a validation to authform
          this.authForm.setErrors({noConnection:true});
        }
      }
    });
  }
}
