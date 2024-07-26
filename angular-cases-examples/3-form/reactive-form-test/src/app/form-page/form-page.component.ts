import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm=this.fb.group({
      name:['name',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      gender:['',[Validators.required]],
      comments:['',[Validators.required]]
    })
  }

  onSubmit(){
  // console.log("this.myForm",this.myForm);
   if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
