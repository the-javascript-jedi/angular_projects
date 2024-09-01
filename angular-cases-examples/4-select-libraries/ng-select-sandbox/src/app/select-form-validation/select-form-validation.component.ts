import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-form-validation',
  templateUrl: './select-form-validation.component.html',
  styleUrls: ['./select-form-validation.component.scss']
})
export class SelectFormValidationComponent implements OnInit {

 form: FormGroup;
  cities = [
    { id: null, name: null },
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' }
    // more cities...
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      selectedCity: [null, Validators.required] // The ng-select field
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get selectedCity() {
    return this.form.get('selectedCity');
  }
}
