import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup,Validators} from '@angular/forms';
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
      'userDataFormGroup':new FormGroup({
        'usernameFormControl':new FormControl(null,Validators.required),
        'emailFormControl':new FormControl(null,[Validators.required,Validators.email]),
      }),
      'genderFormControl':new FormControl("male"),
      'hobbiesFormArray':new FormArray([])
    });
  }
  // step-4 - display the signupFormGroup
  onSubmit(){
    console.log("this.signupFormGroup",this.signupFormGroup);
  }
  //Adding Form Array 
  onAddHobby(){
    // specify a FormControl
    const customControl=new FormControl(null,Validators.required);
    // for FormArray we need to do typecasting
    (<FormArray>this.signupFormGroup.get('hobbiesFormArray')).push(customControl);
  }
  // Delete Hobby
  onDeleteHobby(idToDelete){
    console.log("idToDelete",idToDelete)
    console.log("this.signupFormGroup.get('hobbiesFormArray'))",this.signupFormGroup.get('hobbiesFormArray'));
    (<FormArray>this.signupFormGroup.get('hobbiesFormArray')).controls.splice(idToDelete,1);
  }
}
