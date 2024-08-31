import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-value-sandbox';
  errorMessages={required:"The name field is required - custom"};

  testControl=new FormControl('MyDefaultValue',Validators.required);

  formGroup=new FormGroup({
    name:new FormControl('',Validators.required)
  })
}
