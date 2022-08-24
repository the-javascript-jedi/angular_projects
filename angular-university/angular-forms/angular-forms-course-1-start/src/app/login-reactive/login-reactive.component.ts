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
  //do not specify the type so that we get automatic type safety
  form=this.fb.group({
    // pass the validators as an array in second argument
    // the third argument(if available) will contain an array of asynchronous validators
    // we specify email the value as non nullable
    email:this.fb.nonNullable.control("",{
      validators:[Validators.required,Validators.email],
      updateOn:'blur'
    }),
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

  login(){
    // we get type of value here
    const formValue=this.form.value;
    console.log("formValue.email",formValue.email);
    console.log("formValue.password",formValue.password);
  }

  reset(){
    // resets all values as null
    //if value should not be null use this.fb.nonNullable.control for specific control
    // to make entire form as non nullable specify the formbuilder as NonNullableFormBuilder
    this.form.reset();
    console.log("this.form.value",this.form.value);
  }
}