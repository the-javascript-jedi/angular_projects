import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ladder-one',
  imports: [ReactiveFormsModule],
  templateUrl: './ladder-one.html',
  styleUrl: './ladder-one.scss',
})
export class LadderOne {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  formSubmt() {
    // trigger error on button click
    this.form.markAllAsTouched();
    console.log('this.form', this.form.value);
    if (this.form.valid) {
      console.log('form valid');
    } else {
      console.log('form inValid');
    }
  }
}
