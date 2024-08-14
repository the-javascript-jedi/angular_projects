import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder){
     this.form=this.fb.group({
      name:["",Validators.required],
      age:["",[Validators.required,Validators.pattern("^[0-9]*$")]]
     })
  }

  submitForm(){
    console.log("this.form",this.form)
  }

 

}
