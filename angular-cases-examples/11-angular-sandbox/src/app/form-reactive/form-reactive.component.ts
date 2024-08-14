import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  myForm:FormGroup;

  constructor(private fb:FormBuilder){
     this.myForm=this.fb.group({
      name:["",Validators.required],
      age:["",[Validators.required,Validators.pattern("^[0-9]*$")]]
     })
  }

  submitForm(){
    console.log("this.myForm",this.myForm)
  }

 

}
