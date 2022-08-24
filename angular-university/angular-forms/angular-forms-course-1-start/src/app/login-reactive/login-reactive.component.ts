import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';
@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  //we can also specify the values outside the formGroup
  //FormBuilder to define a form 
  constructor(private fb:FormBuilder) {  }
  form=this.fb.group({
    // pass the validators as an array in second argument
    // the third argument(if available) will contain an array of asynchronous validators
    email:['',{
      validators:[Validators.required,Validators.email],
      updateOn:'blur'
    }],
    password:['',[Validators.required,
        Validators.minLength(3),
        // add a custom validator
        createPasswordStrengthValidator()]]
  })
  ngOnInit() {  }
  // getter for reactive forms
  get email(){
    return this.form.controls['email'];
  }

  get password(){
    return this.form.controls['password'];
  }
}