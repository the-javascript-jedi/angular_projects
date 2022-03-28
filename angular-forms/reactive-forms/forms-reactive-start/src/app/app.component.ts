import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // step 1 - declare a formGroup
  signupFormGroup:FormGroup;
  ngOnInit(): void {
    //step 2 initialize reactive form before rendering it
    // after initializing a reactive form we need to add FormControl which specify the form elements
    this.signupFormGroup=new FormGroup({
      'usernameFormControl':new FormControl(null),
      'emailFormControl':new FormControl(null),
      'genderFormControl':new FormControl("male"),
    });
  }
  // step-4 - display the signupFormGroup
  onSubmit(){
    console.log("this.signupFormGroup",this.signupFormGroup);
  }
}
