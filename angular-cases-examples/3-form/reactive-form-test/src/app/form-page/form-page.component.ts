import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private sharedData:SharedServiceService) {
    this.myForm=this.fb.group({
      name:['',[Validators.required]],
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
      this.sharedData.setData(this.myForm.value)
      // this.sharedData.setData=this.myForm.value
    } else {
      console.log('Form is invalid');
    }
  }

   // Method to remove the 'required' validator from the 'name' control
  removeNameValidator() {
    this.myForm.get('name').clearValidators();
    this.myForm.get('name').updateValueAndValidity();
  }

   getSerializedForm() {
    return JSON.stringify(this.myForm.value, null, 2);
  }

  addNameValidator(){
    this.myForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    this.myForm.get('name').updateValueAndValidity();
  }
}

